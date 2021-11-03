FROM node:12.13-alpine

WORKDIR /usr/src/app

COPY . ./

RUN npm ci

CMD [ "npm", "start" ]