# use lts node image as base
FROM node:lts

# install command-line utilities
RUN apt-get update && apt-get install -y \
    curl \
    git \
    wget \
    unzip \
    zip \
    && rm -rf /var/lib/apt/lists/*

# Install bash-powerline
RUN curl https://raw.githubusercontent.com/riobard/bash-powerline/master/bash-powerline.sh > /root/.bash-powerline.sh
RUN echo 'source /root/.bash-powerline.sh' >> /root/.bashrc

# the root folder will be mounted at /app in the container
WORKDIR /app/strapi

# use "node" user from strapi/base (inherited from node image) with UID/GID 1000 (avoid permission issues with root)
USER node

# expose strapi port
EXPOSE 1337

# yarn is available in strapi/base
# install dependencies and run in watch mode
CMD yarn install && yarn develop