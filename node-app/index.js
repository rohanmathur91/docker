const http = require("http");

const app = (request, response) => {
  console.log("request received");
  response.end("welcome to node docker container.", "UTF-8");
};

const server = http.createServer(app);
server.listen(3000, () => {
  console.log("server running at port 3000...");
});
