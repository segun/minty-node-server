FROM node:14-alpine

WORKDIR /workspace

COPY package*.json /workspace/
COPY ormconfig.json /workspace/

RUN npm i

COPY . .

RUN npm run build

EXPOSE 3333

CMD ["node", "dist/main.js"]