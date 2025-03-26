#!/bin/bash

# Exit on error
set -e


VM_USER="ubuntu"
VM_IP="your-vm-ip"
VM_PORT="22"  
IMAGE_NAME="EG-mobile"
TAR_FILE="${IMAGE_NAME}.tar"
TEMP_DIR="/tmp"  

# Optional arguments
SSH_KEY=""  # If you need to specify an SSH key: -i /path/to/key.pem

# Show script usage
show_usage() {
  echo "Usage: $0 [options]"
  echo ""
  echo "Options:"
  echo "  -u, --user USER      VM username (default: ubuntu)"
  echo "  -h, --host HOST      VM IP address or hostname (required)"
  echo "  -p, --port PORT      SSH port (default: 22)"
  echo "  -k, --key KEY_FILE   SSH private key file"
  echo "  -i, --image NAME     Docker image name (default: EG-mobile)"
  echo "  -e, --env URL        EG_BASE_URL value for deployment"
  echo "  --help               Show this help message"
  echo ""
  echo "Example:"
  echo "  $0 --host 192.168.1.100 --user ubuntu --key ~/.ssh/id_rsa"
}

# Parse command line arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    -u|--user)
      VM_USER="$2"
      shift 2
      ;;
    -h|--host)
      VM_IP="$2"
      shift 2
      ;;
    -p|--port)
      VM_PORT="$2"
      shift 2
      ;;
    -k|--key)
      SSH_KEY="-i $2"
      shift 2
      ;;
    -i|--image)
      IMAGE_NAME="$2"
      TAR_FILE="${IMAGE_NAME}.tar"
      shift 2
      ;;
    -e|--env)
      EG_BASE_URL="$2"
      shift 2
      ;;
    --help)
      show_usage
      exit 0
      ;;
    *)
      echo "Unknown option: $1"
      show_usage
      exit 1
      ;;
  esac
done

# Validate required parameters
if [ -z "$VM_IP" ] || [ "$VM_IP" = "your-vm-ip" ]; then
  echo "Error: VM IP address or hostname is required."
  echo "Please specify with --host option."
  echo ""
  show_usage
  exit 1
fi

# Set SSH command with options
SSH_CMD="ssh $SSH_KEY -p $VM_PORT ${VM_USER}@${VM_IP}"
SCP_CMD="scp $SSH_KEY -P $VM_PORT"

echo "==== Evergreen Scanner Image Transfer ===="
echo "Target VM: ${VM_USER}@${VM_IP}:${VM_PORT}"
echo "Image name: ${IMAGE_NAME}"

# Step 1: Build the Docker image locally
echo ""
echo "Building Docker image..."
docker build -t $IMAGE_NAME .

# Step 2: Save the Docker image to a tar file
echo ""
echo "Saving Docker image to ${TAR_FILE}..."
docker save $IMAGE_NAME > $TAR_FILE

# Step 3: Transfer the image to the VM
echo ""
echo "Transferring image to VM (this may take a while)..."
$SCP_CMD $TAR_FILE ${VM_USER}@${VM_IP}:${TEMP_DIR}/

# Step 4: Load the image on the VM and clean up
echo ""
echo "Loading image on VM and cleaning up..."
$SSH_CMD "docker load < ${TEMP_DIR}/${TAR_FILE} && rm ${TEMP_DIR}/${TAR_FILE}"

# Step 5: Restart the container on the VM
echo ""
echo "Restarting container on VM..."
if [ -n "$EG_BASE_URL" ]; then
  $SSH_CMD "cd /app && EG_BASE_URL=$EG_BASE_URL docker-compose down && EG_BASE_URL=$EG_BASE_URL docker-compose up -d"
else
  $SSH_CMD "cd /app && docker-compose down && docker-compose up -d"
fi

echo ""
echo "Transfer and deployment completed successfully!"
echo "The application should be running on the VM." 