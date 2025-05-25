# SMART MINIONS AI Agents Directory

This directory contains all the deployed AI agents in the SMART MINIONS marketplace.

## Directory Structure

Each agent has its own subdirectory with the following structure:

```
agents/
├── agent_name/
│   ├── agent.py          # The wrapped agent code
│   ├── Dockerfile        # Container configuration
│   ├── requirements.txt  # Agent-specific dependencies
│   └── metadata.json     # Agent metadata and configuration
```

## Agent Requirements

1. Each agent must include a Gradio interface
2. The main prediction function should be named `predict`
3. Input and output types should be clearly specified
4. Include example inputs for testing

## Example Agent Structure

```python
import gradio as gr

def predict(input_data: str) -> str:
    # Your AI model logic here
    return result

demo = gr.Interface(
    fn=predict,
    inputs=[...],  # Define your inputs
    outputs=[...], # Define your outputs
    title="Your Agent Name",
    description="What your agent does"
)
```

## Deployment Process

1. Agent code is uploaded via the `/api/v1/agents/upload` endpoint
2. Code is validated and wrapped with our API interface
3. Docker container is created and deployed
4. Agent is accessible via both UI and API endpoints

## Security Notes

- All agents run in isolated Docker containers
- Memory and CPU limits are enforced
- Input validation is performed on all requests
- API authentication is required for access

## API Usage

```bash
# Upload new agent
POST /api/v1/agents/upload
Content-Type: multipart/form-data
Authorization: Bearer YOUR_TOKEN

# Invoke agent
POST /api/v1/agents/{agent_id}/predict
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN
{
    "data": ["input_text"]
}
```

For more details, see the main API documentation. 