from typing import List
from pydantic_settings import BaseSettings
from pydantic import AnyHttpUrl, validator

class Settings(BaseSettings):
    API_V1_PREFIX: str = "/api/v1"
    PROJECT_NAME: str = "SMART MINIONS AI Marketplace"
    BACKEND_CORS_ORIGINS: List[str] = ["http://localhost:8080"]

    @validator("BACKEND_CORS_ORIGINS", pre=True)
    def assemble_cors_origins(cls, v: str | List[str]) -> List[str] | str:
        if isinstance(v, str) and not v.startswith("["):
            return [i.strip() for i in v.split(",")]
        elif isinstance(v, list):
            return v
        raise ValueError(v)

    # Security
    SECRET_KEY: str
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

    # Supabase
    SUPABASE_URL: str
    SUPABASE_KEY: str
    SUPABASE_JWT_SECRET: str

    # Stripe
    STRIPE_SECRET_KEY: str
    STRIPE_WEBHOOK_SECRET: str
    STRIPE_PRICE_ID: str

    # Agent Runtime
    AGENT_CONTAINER_REGISTRY: str
    AGENT_DEFAULT_TIMEOUT: int = 30
    AGENT_MAX_MEMORY: int = 512
    AGENT_DEFAULT_CPU: int = 1

    class Config:
        case_sensitive = True
        env_file = ".env"

settings = Settings() 