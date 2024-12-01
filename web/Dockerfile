FROM node:20 AS build

WORKDIR /source

COPY . .

RUN npm install

RUN npm run build



FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=build ./source/dist/angular-practise .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]