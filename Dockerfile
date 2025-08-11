# Etapa 1: Construcción
FROM node:18 AS builder
WORKDIR /app

# Copiar package.json y package-lock.json desde el backend real
COPY apps/bareber-resource-backend-server/package*.json ./

RUN npm install

# Copiar el resto del backend
COPY apps/bareber-resource-backend-server ./

# Copiar carpeta prisma para generar cliente
COPY apps/bareber-resource-backend-server/prisma ./prisma

RUN npx prisma generate --schema=prisma/schema.prisma
RUN npm run build

# Etapa 2: Ejecución
FROM node:18
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm", "run", "start:prod"]
