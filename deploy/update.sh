#!/usr/bin/env bash
# VPS uzerinde calisir: git'ten ceker, build alir. Nginx out/ klasorunu servis eder.
# Ilk kurulum icin deploy/README.md.
# Kullanim (VPS'te):  cd /var/www/efendioglu && bash deploy/update.sh
set -euo pipefail

cd "$(dirname "$0")/.."

echo "==> Git'ten cekiliyor..."
git pull --ff-only

echo "==> Bagimliliklar kuruluyor..."
npm ci

echo "==> Build aliniyor..."
npm run build

echo "==> Tamam. Site guncellendi (out/ Nginx tarafindan servis ediliyor)."
