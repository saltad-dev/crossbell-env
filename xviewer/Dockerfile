FROM node:16.17.0

WORKDIR /app
COPY . .

RUN yarn 

RUN yarn build

ENV CROSSBELL_RPC_ADDRESS http://localhost:8545

expose 3000

CMD ["npm", "start"]


