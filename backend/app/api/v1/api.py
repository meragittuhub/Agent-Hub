from fastapi import APIRouter
from app.api.v1.endpoints import auth, agents, payments, users, gradio_test

api_router = APIRouter()
 
api_router.include_router(auth.router, prefix="/auth", tags=["authentication"])
api_router.include_router(agents.router, prefix="/agents", tags=["agents"])
api_router.include_router(payments.router, prefix="/payments", tags=["payments"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(gradio_test.router, prefix="/gradio", tags=["gradio"]) 