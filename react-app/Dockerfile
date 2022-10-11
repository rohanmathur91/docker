# build stage
FROM node:16-alpine AS builder
WORKDIR /app
COPY package-lock.json package.json ./
RUN npm ci
COPY . .
RUN npm run build

# runtime stage
FROM nginx:1.17
COPY --from=builder /app/build /usr/share/nginx/html