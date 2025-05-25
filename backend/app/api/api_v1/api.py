from fastapi import APIRouter
from app.api.api_v1.endpoints import items

router = APIRouter()

router.include_router(items.router, prefix="/items", tags=["items"])

@router.get("/health")
async def health_check():
    """Extended health check endpoint"""
    return {
        "status": "healthy",
        "api_version": "v1",
        "services": {
            "database": "configured",
            "ai_models": "not_configured"
        }
    } 