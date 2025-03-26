#!/bin/bash

# Exit on error
set -e

# Default values
VM_USER="ubuntu"
VM_IP=""
VM_DEPLOY_PATH="/home/ubuntu/evergreen-scanner"
IMAGE_NAME="eg-mobile"
SKIP_IMAGE_TRANSFER=false

# Display usage information
function show_usage {
  echo "Usage: $0 [options]"
  echo "Options:"
  echo "  -i, --ip IP              VM IP address (required)"
  echo "  -u, --user USER          SSH username (default: ubuntu)"
  echo "  -p, --path PATH          Deployment path on VM (default: /home/ubuntu/evergreen-scanner)"
  echo "  -n, --name IMAGE_NAME    Docker image name (default: eg-mobile)"
  echo "  -s, --skip-image         Skip image transfer (use when image is already on VM)"
  echo "  -h, --help               Display this help message"
  exit 1
}

# Parse command line arguments
while [[ $# -gt 0 ]]; do
  case "$1" in
    -i|--ip)
      VM_IP="$2"
      shift 2
      ;;
    -u|--user)
      VM_USER="$2"
      shift 2
      ;;
    -p|--path)
      VM_DEPLOY_PATH="$2"
      shift 2
      ;;
    -n|--name)
      IMAGE_NAME="$2"
      shift 2
      ;;
    -s|--skip-image)
      SKIP_IMAGE_TRANSFER=true
      shift 1
      ;;
    -h|--help)
      show_usage
      ;;
    *)
      echo "Unknown option: $1"
      show_usage
      ;;
  esac
done

# Check if VM_IP is provided
if [ -z "$VM_IP" ]; then
  echo "Error: VM IP address is required."
  show_usage
fi

# Check if all required commands are available
for cmd in rsync ssh docker; do
  if ! command -v $cmd &> /dev/null; then
    echo "Error: $cmd is not installed. Please install it and try again."
    exit 1
  fi
done

echo "==== Evergreen Scanner Sync & Deploy ===="
echo "Using the following configuration:"
echo "  VM IP: $VM_IP"
echo "  VM User: $VM_USER"
echo "  VM Deploy Path: $VM_DEPLOY_PATH"
echo "  Image Name: $IMAGE_NAME"
echo "  Skip Image Transfer: $SKIP_IMAGE_TRANSFER"
echo ""

if [ "$SKIP_IMAGE_TRANSFER" = false ]; then
  # Step 1: Save the Docker image to a tar file
  echo "Saving Docker image to a tar file..."
  docker save ${IMAGE_NAME} -o ${IMAGE_NAME}.tar
fi

# Step 2: Transfer the Docker image to the VM if needed
echo "Syncing files to VM..."
if [ "$SKIP_IMAGE_TRANSFER" = false ]; then
  rsync -avz --progress \
    ${IMAGE_NAME}.tar ${VM_USER}@${VM_IP}:${VM_DEPLOY_PATH}/
fi

# Step 3: SSH into the VM and load/start the container
echo "Connecting to VM to deploy the container..."
if [ "$SKIP_IMAGE_TRANSFER" = false ]; then
  ssh ${VM_USER}@${VM_IP} "cd ${VM_DEPLOY_PATH} && \
    docker stop ${IMAGE_NAME} || true && \
    docker rm ${IMAGE_NAME} || true && \
    docker load < ${IMAGE_NAME}.tar && \
    docker run -d \
      --name ${IMAGE_NAME} \
      -p 3000:3000 \
      -e NODE_ENV=production \
      -e EG_BASE_URL=http://localhost:80 \
      -e HOSTNAME=0.0.0.0 \
      --restart unless-stopped \
      ${IMAGE_NAME}"
else
  ssh ${VM_USER}@${VM_IP} "cd ${VM_DEPLOY_PATH} && \
    docker stop ${IMAGE_NAME} || true && \
    docker rm ${IMAGE_NAME} || true && \
    docker run -d \
      --name ${IMAGE_NAME} \
      -p 3000:3000 \
      -e NODE_ENV=production \
      -e EG_BASE_URL=http://localhost:80 \
      -e HOSTNAME=0.0.0.0 \
      --restart unless-stopped \
      ${IMAGE_NAME}"
fi

# Clean up the local tar file if it was created
if [ "$SKIP_IMAGE_TRANSFER" = false ]; then
  rm ${IMAGE_NAME}.tar
fi

echo ""
echo "Sync and deploy completed successfully!"
echo "The application should be running at http://${VM_IP}:3000" 