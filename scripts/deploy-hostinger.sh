#!/usr/bin/env bash

set -euo pipefail

REMOTE_USER="${HOSTINGER_USER:-}"
REMOTE_HOST="${HOSTINGER_HOST:-}"
REMOTE_PATH="/home/u876211904/domains/tempa.dev/public_html/foder-tempa.dev"

if [[ -z "$REMOTE_USER" || -z "$REMOTE_HOST" ]]; then
  echo "Error: set HOSTINGER_USER and HOSTINGER_HOST first."
  echo "Example: export HOSTINGER_USER='u876211904'"
  echo "Example: export HOSTINGER_HOST='your.server.hostname'"
  exit 1
fi

echo "Building static site with Nuxt..."
npm run generate

OUTPUT_DIR=""
if [[ -d ".output/public" ]]; then
  OUTPUT_DIR=".output/public"
elif [[ -d "dist" ]]; then
  OUTPUT_DIR="dist"
else
  echo "Error: No output directory found after build."
  echo "Expected one of: .output/public or dist"
  exit 1
fi

echo "Ensuring remote directory exists: ${REMOTE_PATH}"
ssh "${REMOTE_USER}@${REMOTE_HOST}" "mkdir -p '${REMOTE_PATH}'"

echo "Syncing ${OUTPUT_DIR}/ to Hostinger..."
rsync -avz --delete "${OUTPUT_DIR}/" "${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}/"

echo "Deploy complete: ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}"
