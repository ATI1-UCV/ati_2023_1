FROM ubuntu:16.04

RUN apt-get update \
    && DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
        nano \
        net-tools \
        apache2 \
        php7.2 \
        php-pear \
        php7.2-dev \
        php7.2-zip \
        php7.2-curl \
        php7.2-gd \
        php7.2-mysql \
        php7.2-xml \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

CMD ["/bin/bash"]