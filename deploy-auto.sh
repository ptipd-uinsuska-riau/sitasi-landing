#!/bin/bash

cd /home/sitasi.uin-suska.ac.id/sitasi-landing
# Memeriksa apakah repositori sudah dalam keadaan up-to-date
git fetch
echo $(git rev-parse HEAD)
echo $(git rev-parse @{u})

if [ "$(git rev-parse HEAD)" = "$(git rev-parse @{u})" ]; then
  echo "Repositori sudah dalam keadaan up-to-date..."
else
  echo "Repositori tidak up-to-date. Melakukan pembaruan..."
  cd /home/sitasi.uin-suska.ac.id/sitasi-landing
  sh deploy.sh
  echo "Pembaruan selesai."
fi