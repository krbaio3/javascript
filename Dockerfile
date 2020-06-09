FROM node

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

ADD . /usr/src/app

CMD [ "npm", "start" ]

