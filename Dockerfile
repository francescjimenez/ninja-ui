FROM node:8.16.0-alpine AS build-env
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=build-env /app/storybook-static /usr/share/nginx/html