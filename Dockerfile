FROM node:lts-slim
LABEL maintainer="nicolas.borboen@epfl.ch"

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install && npm cache clean --force
COPY . /usr/src/app

EXPOSE 3000
