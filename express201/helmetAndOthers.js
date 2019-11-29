const express = require("express");
const server = express();

server.use(express.static("public"));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.post("/ajax", (req, res) => {
  console.log(req.body);
  res.send("Test!");
});

const PORT = 3333;
server.listen(PORT, () => {
  console.log(`\n *** Server listening on port ${PORT} *** \n`);
});
