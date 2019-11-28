const express = require("express");
const server = express();

server.all("/", (req, res) => {
  res.send(`<h1>Node server is running</h1>`);
});
server.get("/", (req, res) => {});

const PORT = 3555;
server.listen(PORT, () => {
  console.log(`\n *** Server is listening on port ${PORT}! *** \n`);
});
