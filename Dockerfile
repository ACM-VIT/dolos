FROM node:lts

ENV NODE_ENV="docker"

WORKDIR /dolos

COPY package.json ./

RUN npm install --quiet

RUN npm install nodemon -g

COPY . .

EXPOSE 3000

CMD nodemon -L --watch . src/app.js