FROM php
COPY . /
EXPOSE 8080
CMD [ "php", "-S", "0.0.0.0:8080"]