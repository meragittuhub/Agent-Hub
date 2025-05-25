#!/usr/bin/env bash
# Exit on error
set -e

# Print current directory and its contents
echo "Current directory: $(pwd)"
ls -la

# Create and navigate to the backend directory if it doesn't exist
mkdir -p backend_deploy
cp -r backend/* backend_deploy/

# Navigate to the backend directory
cd backend_deploy

# Install Python dependencies
pip install -r requirements.txt

# Print confirmation
echo "Build script completed successfully" 