const express = require("express");
const server = express();

server.use(express.static("public"));

server.post("/ajax", (req, res) => {
  res.send("Test");
});

const PORT = 3333;
server.listen(PORT, () => {
  console.log(`\n *** Server listening on port ${PORT} *** \n`);
});
