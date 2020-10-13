FROM node

WORKDIR /usr/src

COPY package.json .

RUN npm install

ADD . /usr/src

CMD [ "npm", "start" ]

