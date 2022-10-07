#### Commands

```docker
# To build the docker image
docker build --tag my-node-app .
```

```docker
# To run the docker image
docker run --init --rm --name express-server --publish 3000:3000 my-node-app
```

#### Flags

```docker
--init: it will listen to CTRL + C to terminate the running node app

--name: it will give a name to the conatiner

--rm: it will remove the name of container as soon as its stopped

--publish | -p: it will run the node on specified port
```
