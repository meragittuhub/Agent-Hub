from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
import sys
import os
from pathlib import Path
from typing import List, Dict, Any

# Add the backend directory to Python path
backend_dir = Path(__file__).parent.parent.parent.parent.parent
sys.path.append(str(backend_dir))

from test import create_app, api_interface

router = APIRouter()
security = HTTPBearer()

# Create and launch the Gradio app
demo = create_app()
app = demo.launch(prevent_thread_lock=True, server_port=7860)

@router.post("/predict")
async def predict(
    data: Dict[str, List[str]],
    credentials: HTTPAuthorizationCredentials = Depends(security)
) -> Dict[str, Any]:
    """
    Predict endpoint that matches the required format:
    POST /api/v1/agents/your-agent/predict
    """
    try:
        # Validate input format
        if "data" not in data or not isinstance(data["data"], list):
            raise HTTPException(
                status_code=400,
                detail={
                    "error": {
                        "message": "Input must contain 'data' field with a list of strings",
                        "code": "INVALID_INPUT"
                    },
                    "status": "error"
                }
            )
        
        # Process the input
        result = api_interface(data["data"])
        return result
        
    except HTTPException as he:
        raise he
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail={
                "error": {
                    "message": str(e),
                    "code": "INTERNAL_ERROR"
                },
                "status": "error"
            }
        )

@router.get("/status")
async def get_gradio_app():
    """Get the Gradio app URL and status"""
    return {
        "message": "Gradio Text Analyzer is running",
        "url": "http://localhost:7860",
        "status": "active",
        "description": "Access the URL to use the text analyzer interface"
    } 