import uvicorn
import signal
import sys
from loguru import logger

def handle_shutdown(signum, frame):
    """Handle shutdown signals gracefully"""
    logger.info("Received shutdown signal. Performing cleanup...")
    sys.exit(0)

def main():
    """Main entry point for the application"""
    # Register signal handlers
    signal.signal(signal.SIGINT, handle_shutdown)
    signal.signal(signal.SIGTERM, handle_shutdown)

    logger.info("Starting server...")
    
    # Configure uvicorn server
    config = uvicorn.Config(
        "app.main:app",
        host="127.0.0.1",
        port=8000,
        reload=True,
        reload_dirs=["app"],
        log_level="info",
        workers=1
    )
    
    server = uvicorn.Server(config)
    server.run()

if __name__ == "__main__":
    main() 