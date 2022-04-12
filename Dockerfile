FROM node:lts-alpine
LABEL maintainer="nicolas.borboen@epfl.ch"

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install && npm cache clean --force
COPY main.js /usr/src/app/
RUN mkdir /usr/src/app/views
COPY views /usr/src/app/views

EXPOSE 3000

CMD [ "npm", "start" ]
