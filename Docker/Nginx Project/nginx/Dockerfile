FROM nginx:1.21.6

RUN apt-get update && apt-get install -y curl

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/default.conf