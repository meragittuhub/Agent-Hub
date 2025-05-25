import secrets
import base64

def generate_secret_key():
    # Generate a 32-byte (256-bit) random key
    random_bytes = secrets.token_bytes(32)
    # Convert to base64 for easier storage
    secret_key = base64.b64encode(random_bytes).decode('utf-8')
    return secret_key

if __name__ == "__main__":
    secret_key = generate_secret_key()
    print("\nGenerated SECRET_KEY:")
    print("=" * 50)
    print(secret_key)
    print("=" * 50)
    print("\nAdd this to your .env file as:")
    print(f'SECRET_KEY="{secret_key}"')
    print("\nMake sure to keep this key secure and never share it!") 