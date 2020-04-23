### STAGE 1: Build ###
FROM node:12.7-alpine as builder

WORKDIR /app

COPY package.json package-lock.json ./

## I think this should be: npm ci
RUN npm install

COPY . .

## Build the angular app in production mode and store the artifacts in dist folder
RUN npm run build:docker

### STAGE 2: Setup ###
FROM nginx:1.17.1-alpine

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /app/dist /usr/share/nginx/html

## Expose port
EXPOSE 80

CMD nginx -g 'daemon off;'