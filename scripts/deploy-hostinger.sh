#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"

REMOTE_USER="${HOSTINGER_USER:-}"
REMOTE_HOST="${HOSTINGER_HOST:-}"
REMOTE_PATH="/home/u876211904/domains/tempa.dev/public_html/foder-tempa.dev"

if [[ -z "$REMOTE_USER" || -z "$REMOTE_HOST" ]]; then
  echo "Error: set HOSTINGER_USER and HOSTINGER_HOST first."
  echo "Example: export HOSTINGER_USER='u876211904'"
  echo "Example: export HOSTINGER_HOST='your.server.hostname'"
  exit 1
fi

cd "${PROJECT_ROOT}"

echo "Building static site with Nuxt..."
npm run generate

OUTPUT_DIR=""
if [[ -d "${PROJECT_ROOT}/.output/public" ]]; then
  OUTPUT_DIR="${PROJECT_ROOT}/.output/public"
elif [[ -d "${PROJECT_ROOT}/dist" ]]; then
  OUTPUT_DIR="${PROJECT_ROOT}/dist"
else
  echo "Error: No output directory found after build."
  echo "Checked:"
  echo "  - ${PROJECT_ROOT}/.output/public"
  echo "  - ${PROJECT_ROOT}/dist"
  exit 1
fi

echo "Ensuring remote directory exists: ${REMOTE_PATH}"
ssh "${REMOTE_USER}@${REMOTE_HOST}" "mkdir -p '${REMOTE_PATH}'"

echo "Syncing ${OUTPUT_DIR}/ to Hostinger..."
rsync -avz --delete "${OUTPUT_DIR}/" "${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}/"

echo "Deploy complete: ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}"
