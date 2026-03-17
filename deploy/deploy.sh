#!/bin/bash
# =============================================================
# Smart Moments SEO - Script de deploiement
# Usage: ssh root@pyrodesk.com 'cd /var/www/smartmoments-seo && bash deploy/deploy.sh'
# =============================================================
set -euo pipefail

APP_DIR="/var/www/smartmoments-seo"
cd "$APP_DIR"

echo "===== [1/4] Pull du code ====="
git pull origin main

echo "===== [2/4] Installation des dependances ====="
npm ci

echo "===== [3/4] Build Next.js ====="
npm run build

echo "===== [4/4] Redemarrage PM2 ====="
if pm2 describe smartmoments > /dev/null 2>&1; then
  pm2 restart smartmoments
  echo "→ PM2 : redemarrage"
else
  pm2 start deploy/ecosystem.config.js
  pm2 save
  echo "→ PM2 : premier demarrage"
fi

echo ""
echo "===== DEPLOIEMENT TERMINE ====="
pm2 status
echo ""
echo "Verifier : curl -s -o /dev/null -w '%{http_code}' http://localhost:3005"
