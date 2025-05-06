FROM node:20-alpine3.20 AS base

WORKDIR /app

# Builder stage
FROM base AS builder

COPY package*.json .
COPY tsconfig.json .
RUN npm install
COPY . .
RUN npm run build

# Production Stage
FROM base AS production

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/tsconfig.json ./
RUN npm install --omit=dev

# Clean cache
RUN npm cache clean --force

EXPOSE 3000
CMD [ "npm", "start" ]