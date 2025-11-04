# BugBuddy

## Connect & Socialise here

- With same mindset

## AWS deployment

- Frontend
    - npm install
    - npm run build
    - sudo apt update
    - sudo apt install nginx
    - sudo systemctl start nginx
    - sudo systemctl enable nginx
    - sudo scp -r dist/\* /var/www/html/
    - Enable port 80

- Backend
    - allowed ec2 instance public IP on mongodb server
    - npm intsall pm2 -g
    - pm2 start npm --name "bugbuddy-backend" -- start
    - pm2 logs
    - pm2 list, pm2 flush <name> , pm2 stop <name>, pm2 delete <name>
    - config nginx - sudo nano /etc/nginx/sites-available/default
    - restart nginx - sudo systemctl restart nginx
    - Modify the BASEURL in frontend project to "/api"

## Ngxinx config:

- Frontend = http://43.204.96.49/
- Backend = http://43.204.96.49:7777/

- Domain name = devtinder.com => 43.204.96.49

- Frontend = devtinder.com
- Backend = devtinder.com:7777 => devtinder.com/api

- nginx config :

- server_name 43.204.96.49;
  location /api/ {
  proxy_pass http://localhost:7777/; # Pass the request to the Node.js app
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection 'upgrade';
  proxy_set_header Host $host;
  proxy_cache_bypass $http_upgrade;
  }
