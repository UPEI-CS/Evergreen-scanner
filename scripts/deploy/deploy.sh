#!/bin/bash

# Exit on error
set -e

# Configuration
REPO_DIR=$(pwd)
BRANCH=${1:-main}  # Default to main branch if not specified

echo "==== Evergreen Scanner Deployment ===="
echo "Deploying from branch: $BRANCH"

# Step 1: Update the code from git
echo ""
echo "Pulling latest changes..."
git fetch
git checkout $BRANCH
git pull origin $BRANCH

# Step 2: Build the Docker image
echo ""
echo "Building Docker image..."
docker build -t EG-mobile .

# Step 3: Stop the running container (if any)
echo ""
echo "Stopping the existing container (if running)..."
docker-compose down || true

# Step 4: Start the new container
echo ""
echo "Starting the updated container..."
docker-compose up -d

echo ""
echo "Deployment completed successfully!"
echo "The application should be running at http://localhost:3000" 