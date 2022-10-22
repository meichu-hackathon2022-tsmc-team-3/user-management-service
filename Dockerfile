FROM node:lts-alpine

WORKDIR /app

COPY package.json .

RUN npm install

EXPOSE 3000

COPY src /app/src

CMD ["npm", "start"]