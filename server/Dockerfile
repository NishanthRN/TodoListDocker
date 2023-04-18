FROM node:16-alpine

WORKDIR /server_app

COPY package.json .

RUN npm install 

RUN npm install nodemon

COPY . .

EXPOSE 8000

CMD ["npm","start"]