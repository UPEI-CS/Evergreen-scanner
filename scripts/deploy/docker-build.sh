#!/bin/bash

# Exit on error
set -e

echo "Building Evergreen Scanner Docker image..."
docker build -t EG-mobile .

echo "Docker image built successfully!"
echo ""
echo "Usage examples:"
echo "1. Run with default EG_BASE_URL (http://localhost:80):"
echo "   docker run -p 3000:3000 EG-mobile"
echo ""
echo "2. Run with custom EG_BASE_URL:"
echo "   docker run -p 3000:3000 -e EG_BASE_URL=http://your-api-server.com EG-mobile"
echo ""
echo "3. Using docker-compose with default EG_BASE_URL:"
echo "   docker-compose up"
echo ""
echo "4. Using docker-compose with custom EG_BASE_URL:"
echo "   EG_BASE_URL=http://your-api-server.com docker-compose up" 