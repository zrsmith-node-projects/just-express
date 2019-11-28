const express = require("express");
const server = express();

server.get("/", (req, res) => {});

const PORT = 3333;
server.listen(PORT, () => {
  console.log(`\n *** Server is listening on port ${PORT} *** \n`);
});
