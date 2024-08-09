FROM node:22 AS builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

RUN npm run dev

FROM node:22

WORKDIR /app

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["npm", "run", "start"]