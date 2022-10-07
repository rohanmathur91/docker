FROM node:12-stretch

USER node

# this will create a directory under "node" user
# so permission error will be avoided
RUN mkdir /home/node/src

WORKDIR /home/node/src  

COPY --chown=node:node . .

RUN npm ci

CMD ["node", "index.js"]