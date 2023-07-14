FROM node:16.17.0

WORKDIR /app
COPY . .

RUN npm install

expose 8545

CMD ["npm", "start"]


