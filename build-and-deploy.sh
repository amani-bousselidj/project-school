#!/bin/bash

git pull origin main
npm run build
sudo rm -rf /var/www/aml-school/frontend/
sudo cp -r build/ /var/www/aml-school/frontend/
