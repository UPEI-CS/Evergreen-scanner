# Deployment Scripts for Evergreen Scanner

This directory contains scripts to help you build, deploy, and manage your Evergreen Scanner application 
in different environments.

## Script Organization

- `vm/`: Scripts for VM-based deployment
  - `deploy.sh`: Git-based deployment on a VM
  - `load-image.sh`: Load a Docker image on a VM

- `local/`: Scripts for local operations
  - `save-image.sh`: Save Docker image as tar file for transfer
  - `sync-to-vm.sh`: Sync local code to VM and trigger rebuild

## Quick Usage Guide

### Build and Transfer Image

```bash
# Build image locally and save to tar file
./deploy/local/save-image.sh

# On VM, after transferring the tar file
./deploy/vm/load-image.sh
```

### Git-based Deployment

```bash
# On VM, deploy from a specific branch (defaults to main)
./deploy/vm/deploy.sh [branch-name]
```

### Direct Sync and Deploy

```bash
# From local machine, sync code and trigger rebuild on VM
./deploy/local/sync-to-vm.sh
```

## Environment Variables

All methods support setting the `EG_BASE_URL` environment variable:

```bash
# Using docker-compose
EG_BASE_URL=http://your-api-server.com docker-compose up

# Using docker run
docker run -p 3000:3000 -e EG_BASE_URL=http://your-api-server.com EG-mobile
``` 