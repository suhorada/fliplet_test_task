FROM ./

WORKDIR /usr/src/app

ENV PORT 9999

COPY . ./

RUN npm install

CMD [ "npm", "start" ]