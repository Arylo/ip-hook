FROM node:lts-alpine

LABEL AUTHOR="Arylo Yeung"

ENV NODE_ENV=production
EXPOSE 8080
ENV WEBHOOK=
ENV CRON=
ENV INTERFACE=

COPY ["./package.json", "./"]

RUN npm install --production

COPY . .

CMD ["node", "dist/index.js"]
