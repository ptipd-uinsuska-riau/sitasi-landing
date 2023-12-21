#!bin/sh

git stash && git pull && yarn install && yarn build &&
NODE_ENV=production pm2 startOrReload ecosystem.config.js --env production && pm2 save
openssl rand -hex 20 > .version
date > .last_build