#!/usr/bin/env bash
# Run on the server inside the cloned repo (after SSH login).
# Usage:
#   ./scripts/deploy.sh
#   PUBLIC_HTML=/home/you/public_html ./scripts/deploy.sh
#
# First time: git clone https://github.com/Juddanxavier/titus.git && cd titus && chmod +x scripts/deploy.sh

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

BRANCH="${DEPLOY_BRANCH:-main}"
PUBLIC_HTML="${PUBLIC_HTML:-}"

echo "==> Pull latest ($BRANCH)"
git fetch origin "$BRANCH"
git checkout "$BRANCH"
git pull origin "$BRANCH"

echo "==> Install dependencies"
if command -v npm >/dev/null 2>&1; then
  if [[ -f package-lock.json ]]; then
    npm ci
  else
    npm install
  fi
else
  echo "Error: npm not found. Install Node.js on the server or build locally and upload dist/." >&2
  exit 1
fi

echo "==> Build"
npm run build

echo "==> Ensure storage is writable"
mkdir -p "$ROOT/dist/storage/uploads"
chmod -R u+rwX "$ROOT/dist/storage" 2>/dev/null || true

if [[ -n "$PUBLIC_HTML" ]]; then
  echo "==> Sync dist/ -> $PUBLIC_HTML"
  mkdir -p "$PUBLIC_HTML"
  rsync -a --delete \
    --exclude 'storage/uploads/' \
    "$ROOT/dist/" "$PUBLIC_HTML/"
  mkdir -p "$PUBLIC_HTML/storage/uploads"
  chmod -R u+rwX "$PUBLIC_HTML/storage" 2>/dev/null || true
  echo "Done. Site files are in $PUBLIC_HTML"
else
  echo "Done. Point your domain document root to: $ROOT/dist"
  echo "Or set PUBLIC_HTML and re-run, e.g.:"
  echo "  PUBLIC_HTML=/home/you/public_html ./scripts/deploy.sh"
fi
