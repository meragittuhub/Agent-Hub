from app.db.database import Base, engine
from app.models.item import Item  # Import all models here

def init_db():
    """Initialize the database by creating all tables"""
    Base.metadata.create_all(bind=engine) 