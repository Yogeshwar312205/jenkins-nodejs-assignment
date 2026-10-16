
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev --no-audit --no-fund

COPY server.js ./

EXPOSE 3000

ENV PORT=3000

CMD ["node", "server.js"]
