FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY ./dist/angular-practise .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]