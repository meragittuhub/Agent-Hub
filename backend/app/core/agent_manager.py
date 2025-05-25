from pathlib import Path
from typing import Dict, Any, Optional
import docker
import json
import gradio as gr
from app.core.config import Settings
import logging

logger = logging.getLogger(__name__)

class AgentManager:
    def __init__(self, settings: Settings):
        self.settings = settings
        self.agents_dir = Path("agents")
        self.agents_dir.mkdir(exist_ok=True)
        self.docker_client = docker.from_env()
        self._running_agents: Dict[str, Any] = {}

    async def deploy_agent(self, agent_id: str, code_path: Path, metadata: Dict[str, Any]) -> Dict[str, Any]:
        """
        Deploy an agent using Docker
        """
        try:
            # Build Docker image
            dockerfile_content = f"""
FROM python:3.9-slim
WORKDIR /app
COPY {code_path.name} /app/
COPY requirements.txt /app/
RUN pip install -r requirements.txt
EXPOSE 7860
CMD ["python", "{code_path.name}"]
"""
            docker_path = code_path.parent / "Dockerfile"
            with open(docker_path, "w") as f:
                f.write(dockerfile_content)

            # Build and run container
            image_name = f"smart-minions/agent-{agent_id}"
            self.docker_client.images.build(
                path=str(code_path.parent),
                tag=image_name,
                rm=True
            )

            container = self.docker_client.containers.run(
                image_name,
                detach=True,
                ports={'7860/tcp': None},  # Random port
                mem_limit=f"{self.settings.AGENT_MAX_MEMORY}m",
                cpu_count=self.settings.AGENT_DEFAULT_CPU
            )

            # Get container info
            container_info = container.attrs
            host_port = list(container_info['NetworkSettings']['Ports']['7860/tcp'])[0]['HostPort']

            deployment_info = {
                "container_id": container.id,
                "image_name": image_name,
                "host_port": host_port,
                "status": "running",
                "url": f"http://localhost:{host_port}"
            }

            # Store deployment info
            self._running_agents[agent_id] = deployment_info
            
            return deployment_info

        except Exception as e:
            logger.error(f"Failed to deploy agent {agent_id}: {str(e)}")
            raise

    async def stop_agent(self, agent_id: str) -> bool:
        """
        Stop a running agent
        """
        try:
            if agent_id in self._running_agents:
                container_id = self._running_agents[agent_id]["container_id"]
                container = self.docker_client.containers.get(container_id)
                container.stop()
                container.remove()
                del self._running_agents[agent_id]
                return True
            return False
        except Exception as e:
            logger.error(f"Failed to stop agent {agent_id}: {str(e)}")
            return False

    async def get_agent_status(self, agent_id: str) -> Optional[Dict[str, Any]]:
        """
        Get the status of a running agent
        """
        if agent_id in self._running_agents:
            try:
                container_id = self._running_agents[agent_id]["container_id"]
                container = self.docker_client.containers.get(container_id)
                return {
                    "status": container.status,
                    "url": self._running_agents[agent_id]["url"],
                    "container_id": container_id
                }
            except Exception as e:
                logger.error(f"Failed to get agent status for {agent_id}: {str(e)}")
                return None
        return None

    async def list_running_agents(self) -> Dict[str, Any]:
        """
        List all running agents
        """
        return {
            "agents": [
                {
                    "agent_id": agent_id,
                    **info
                }
                for agent_id, info in self._running_agents.items()
            ]
        }

    async def cleanup(self) -> None:
        """
        Clean up all running agents
        """
        for agent_id in list(self._running_agents.keys()):
            await self.stop_agent(agent_id) 