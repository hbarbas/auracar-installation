FROM node:16.19.0-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ARG VUE_APP_BACKEND_URL
ENV VUE_APP_BACKEND_URL $VUE_APP_BACKEND_URL
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY .docker/nginx/prod.conf /temp/prod.conf
RUN envsubst /app < /temp/prod.conf > /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

