from app.core.security import validate_secret_key
from app.core.config import settings

def verify_secret_key():
    print("\nVerifying SECRET_KEY configuration...")
    print("=" * 50)
    
    if not settings.SECRET_KEY:
        print("❌ ERROR: SECRET_KEY is not set in .env file")
        return False
    
    if settings.SECRET_KEY == "your-secret-key-here":
        print("❌ ERROR: SECRET_KEY is still set to default value")
        return False
    
    if validate_secret_key(settings.SECRET_KEY):
        print("✅ SUCCESS: SECRET_KEY is properly configured")
        return True
    else:
        print("❌ ERROR: SECRET_KEY does not meet security requirements")
        print("Please generate a new key using scripts/generate_secret.py")
        return False

if __name__ == "__main__":
    verify_secret_key() 