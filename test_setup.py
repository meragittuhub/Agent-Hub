import httpx
import asyncio
from loguru import logger

async def test_endpoints():
    """Test the basic endpoints of our API"""
    base_url = "http://localhost:8000"
    
    async with httpx.AsyncClient() as client:
        # Test health endpoint
        logger.info("Testing health endpoint...")
        response = await client.get(f"{base_url}/health")
        assert response.status_code == 200
        assert response.json()["status"] == "healthy"
        logger.success("Health endpoint working!")

        # Test root endpoint
        logger.info("Testing root endpoint...")
        response = await client.get(f"{base_url}/")
        assert response.status_code == 200
        assert response.json()["status"] == "healthy"
        logger.success("Root endpoint working!")

        # Test OpenAPI docs accessibility
        logger.info("Testing OpenAPI docs...")
        response = await client.get(f"{base_url}/docs")
        assert response.status_code == 200
        logger.success("OpenAPI docs accessible!")

        # Test Gradio endpoint
        logger.info("Testing Gradio endpoint...")
        response = await client.get(f"{base_url}/api/v1/gradio/gradio-test")
        assert response.status_code == 200
        data = response.json()
        assert "url" in data
        logger.success("Gradio endpoint working!")
        logger.info(f"Gradio UI available at: {data['url']}")

        logger.info("All basic endpoints are working!")

if __name__ == "__main__":
    logger.info("Starting API tests...")
    asyncio.run(test_endpoints()) 