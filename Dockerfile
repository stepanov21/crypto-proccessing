FROM node:18-alpine as base
RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app
COPY package*.json ./

FROM base as builder
COPY . .
RUN npm install
RUN npm run build

FROM node:18-alpine as production
WORKDIR /app

COPY --from=builder /app ./
RUN npm ci --production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs

CMD ["npm", "start"]
