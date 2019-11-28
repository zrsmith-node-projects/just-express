const express = require("express");
const server = express();

server.use(express.static("public"));

const PORT = 3666;
server.listen(PORT, () => {
  console.log(`\n *** Server listening on port ${PORT} *** \n`);
});
