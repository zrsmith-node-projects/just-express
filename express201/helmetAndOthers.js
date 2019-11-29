const express = require("express");
const helmet = require("helmet");
const server = express();

server.use(helmet());
server.use(express.static("public"));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.post("/ajax", (req, res) => {
  console.log(req.body);
  res.json("Test!");
});

const PORT = 3333;
server.listen(PORT, () => {
  console.log(`\n *** Server listening on port ${PORT} *** \n`);
});
