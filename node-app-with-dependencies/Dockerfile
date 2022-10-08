FROM node:12-stretch

USER node

# this will create a directory under "node" user
# so permission error will be avoided
RUN mkdir /home/node/src

WORKDIR /home/node/src  

COPY --chown=node:node package-lock.json package.json ./

RUN npm ci

COPY --chown=node:node . .

# docker run --init --rm  --detach --name express-server -P my-node-app
EXPOSE 3000

CMD ["node", "index.js"]