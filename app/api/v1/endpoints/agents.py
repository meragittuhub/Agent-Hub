from fastapi import APIRouter, HTTPException, UploadFile, File, Depends, Body
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from typing import Dict, Any, Optional
import tempfile
import os
import ast
import inspect
from pathlib import Path
import gradio as gr
from pydantic import BaseModel
import time
import json

router = APIRouter()
security = HTTPBearer()

class AgentMetadata(BaseModel):
    name: str
    description: str
    version: str = "1.0.0"
    model_type: str
    input_type: str = "text"
    output_type: str = "text"
    is_public: bool = True
    token_price: float = 1.0

def validate_gradio_code(code_content: str) -> bool:
    """
    Validate if the code contains a valid Gradio interface
    """
    try:
        tree = ast.parse(code_content)
        has_gradio_import = False
        has_interface = False
        
        for node in ast.walk(tree):
            if isinstance(node, ast.Import):
                for name in node.names:
                    if name.name == 'gradio':
                        has_gradio_import = True
            elif isinstance(node, ast.ImportFrom):
                if node.module == 'gradio':
                    has_gradio_import = True
            elif isinstance(node, ast.Call):
                if isinstance(node.func, ast.Attribute):
                    if node.func.attr == 'Interface':
                        has_interface = True
                elif isinstance(node.func, ast.Name):
                    if node.func.id == 'Interface':
                        has_interface = True
        
        return has_gradio_import and has_interface
    except:
        return False

def generate_gradio_wrapper(original_code: str, metadata: AgentMetadata) -> str:
    """
    Generate a Gradio wrapper for the uploaded code
    """
    wrapper_template = f'''
import gradio as gr
import time
from typing import Dict, Any, List

# Original code
{original_code}

def api_wrapper(input_data: List[str]) -> Dict[str, Any]:
    """
    API wrapper for the agent
    """
    start_time = time.time()
    try:
        # Get the main function from the original code
        result = predict(input_data[0])  # Assuming single input for now
        
        return {{
            "data": [result],
            "status": "success",
            "duration": float(f"{{time.time() - start_time:.3f}}")
        }}
    except Exception as e:
        return {{
            "error": {{
                "message": str(e),
                "code": "PROCESSING_ERROR"
            }},
            "status": "error"
        }}

# Create Gradio interface
demo = gr.Interface(
    fn=api_wrapper,
    inputs=gr.Textbox(
        placeholder="Enter input...",
        label="{metadata.name}",
        lines=5
    ),
    outputs=gr.Textbox(
        label="Results",
        lines=8
    ),
    title="{metadata.name}",
    description="{metadata.description}",
    examples=[["Example input here"]],
    cache_examples=True
)

if __name__ == "__main__":
    demo.launch()
'''
    return wrapper_template

@router.post("/upload")
async def upload_agent(
    file: UploadFile = File(...),
    metadata: AgentMetadata = Body(...),
    credentials: HTTPAuthorizationCredentials = Depends(security)
) -> Dict[str, Any]:
    """
    Upload and deploy a new AI agent
    """
    try:
        # Read and validate the code
        content = await file.read()
        code_content = content.decode()
        
        if not validate_gradio_code(code_content):
            raise HTTPException(
                status_code=400,
                detail={
                    "error": {
                        "message": "Invalid code: Must contain a valid Gradio interface",
                        "code": "INVALID_CODE"
                    },
                    "status": "error"
                }
            )
        
        # Generate wrapped code
        wrapped_code = generate_gradio_wrapper(code_content, metadata)
        
        # Create temporary directory for the agent
        agent_dir = Path("agents") / metadata.name.lower().replace(" ", "_")
        agent_dir.mkdir(parents=True, exist_ok=True)
        
        # Save the wrapped code
        agent_file = agent_dir / "agent.py"
        with open(agent_file, "w") as f:
            f.write(wrapped_code)
        
        # Save metadata
        with open(agent_dir / "metadata.json", "w") as f:
            json.dump(metadata.dict(), f, indent=2)
        
        # Launch Gradio app (in development - would be containerized in production)
        import sys
        sys.path.append(str(agent_dir))
        from agent import demo
        app = demo.launch(prevent_thread_lock=True, server_port=0)  # Use random port
        
        return {
            "status": "success",
            "message": "Agent uploaded and deployed successfully",
            "agent_id": metadata.name.lower().replace(" ", "_"),
            "api_endpoint": f"/api/v1/agents/{metadata.name.lower().replace(' ', '_')}/predict",
            "ui_url": app.url
        }
        
    except HTTPException as he:
        raise he
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail={
                "error": {
                    "message": str(e),
                    "code": "DEPLOYMENT_ERROR"
                },
                "status": "error"
            }
        )

@router.get("/list")
async def list_agents(
    credentials: HTTPAuthorizationCredentials = Depends(security)
) -> Dict[str, Any]:
    """
    List all available agents
    """
    try:
        agents_dir = Path("agents")
        if not agents_dir.exists():
            return {"agents": []}
        
        agents = []
        for agent_dir in agents_dir.iterdir():
            if agent_dir.is_dir():
                metadata_file = agent_dir / "metadata.json"
                if metadata_file.exists():
                    with open(metadata_file, "r") as f:
                        metadata = json.load(f)
                        agents.append({
                            "id": agent_dir.name,
                            "metadata": metadata,
                            "api_endpoint": f"/api/v1/agents/{agent_dir.name}/predict"
                        })
        
        return {
            "status": "success",
            "agents": agents
        }
        
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail={
                "error": {
                    "message": str(e),
                    "code": "LISTING_ERROR"
                },
                "status": "error"
            }
        ) 