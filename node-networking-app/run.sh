#
docker run --init --rm --mount type=bind,source="$(pwd)"/,target="/home/node/app" --name server-logger -p 3000:3000 logger