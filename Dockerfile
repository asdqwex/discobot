FROM node:latest

RUN apt-get update && \
    apt-get upgrade -y && \
    # Audio libraries
    apt-get install -y libav-tools && \
    mkdir -p /app && \
    apt-get clean && \
    apt-get autoclean && \
    apt-get -y autoremove && \
    rm -rf /tmp/* /var/tmp/* /var/lib/{cache,log}/ /usr/share/{man,doc} /etc/dpkg/dpkg.cfg.d/02apt-speedup /etc/ssh/ssh_host_*

COPY package.json /app/
WORKDIR /app

# Install deps
RUN npm install

# Copy code after the fact, so that non-package.json changes do not invalidate cache
COPY . /app/

RUN npm test && \
    npm prune --productio

CMD ["node", "bot.js"]
