ARG POSTGRES_PASSWORD
FROM node:17.6.0-alpine3.15 AS dtapp
ARG POSTGRES_PASSWORD

ENV POSTGRES_PASSWORD=$POSTGRES_PASSWORD

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn --prod

COPY ./dist ./dist

EXPOSE 8080

CMD ["node", "dist/main.js"]