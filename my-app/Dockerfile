FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:alpine
ADD ./default.conf /etc/nginx/conf.d/default.conf
COPY  --from=node /app/build/ /var/www/app/
EXPOSE 80