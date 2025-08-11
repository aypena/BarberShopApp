FROM node:18 AS builder
WORKDIR /app
COPY apps/bareber-resource-backend-admin/package*.json ./
RUN npm install
COPY apps/bareber-resource-backend-admin ./
COPY apps/bareber-resource-backend-admin/prisma ./prisma
RUN npx prisma generate --schema=prisma/schema.prisma
RUN npm run build

FROM node:18
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm", "run", "start:prod"]
