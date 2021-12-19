FROM node:14-alpine

WORKDIR /workspace

COPY package*.json /workspace/

RUN npm i

COPY . .

RUN npm run build

CMD ["node", "dist/main.js"]