FROM node:12-stretch

# node image comes with a user and group as "node"
USER node

WORKDIR /home/code

COPY --chown=node:node index.js index.js

CMD ["node", "index.js"]
