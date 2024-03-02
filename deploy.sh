#!/bin/bash

#PRODUCTION
git checkout master
git reset  --hard
git pull origin master
yarn global add serve
yarn global add pm2
yarn
yarn run build
 pm2 start "yarn start:prod" --name=CurHUb-nextjs

#DEVELOPMENT
# npm i yarn -g
# yarn 
# pm2 start "yarn run start" --name=CurHUb-nextjs