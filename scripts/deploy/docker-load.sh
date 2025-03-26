#!/bin/bash

# Exit on error
set -e

if [ ! -f "EG-mobile.tar" ]; then
  echo "Error: EG-mobile.tar not found!"
  echo "Please transfer the image file first."
  exit 1
fi

echo "Loading Docker image from EG-mobile.tar..."
docker load < EG-mobile.tar

echo "Docker image loaded successfully!"
echo ""
echo "You can now run the container with:"
echo "docker run -p 3000:3000 -e EG_BASE_URL=http://your-api-server.com EG-mobile"
echo ""
echo "Or using docker-compose:"
echo "docker-compose up" 