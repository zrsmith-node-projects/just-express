const path = require("path");
const express = require("express");
const server = express();
server.use(express.static("public"));
server.all("/", (req, res) => {
  // res.send(`<h1>Node server is running</h1>`);
  res.sendFile(path.join(__dirname + "/node.html"));
});
server.all("*", (req, res) => {
  res.send(`This page does not exist!`);
});

const PORT = 3555;
server.listen(PORT, () => {
  console.log(`\n *** Server is listening on port ${PORT}! *** \n`);
});
