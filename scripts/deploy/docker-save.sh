#!/bin/bash

# Exit on error
set -e

echo "Building Evergreen Scanner Docker image..."
docker build -t EG-mobile .

echo "Saving Docker image to EG-mobile.tar..."
docker save EG-mobile > EG-mobile.tar

echo "Docker image saved successfully!"
echo ""
echo "Transfer EG-mobile.tar to your VM using scp:"
echo "scp EG-mobile.tar username@vm-ip-address:/path/to/destination/"
echo ""
echo "Then on the VM run:"
echo "docker load < EG-mobile.tar"
echo "docker run -p 3000:3000 -e EG_BASE_URL=http://your-api-server.com EG-mobile" 