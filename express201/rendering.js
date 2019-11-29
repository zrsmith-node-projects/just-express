const express = require("express");

const server = express();

server.use(express.static("public"));
server.use(express.json());
server.use(express.urlencoded());

server.get("/", (req, res) => {
  res.send("Testing node / express");
});

const PORT = 3333;
server.listen(PORT, () => {
  console.log(`\n *** Server is listening on port ${PORT} *** \n`);
});
