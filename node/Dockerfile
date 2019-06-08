FROM node:latest

ADD app.js /node/
ADD package*.json /node/

WORKDIR /node/

RUN npm install

CMD ["node", "app.js"]