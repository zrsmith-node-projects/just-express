const express = require("express");

const server = express();

// all is a method that takes 2 args 1. route, 2. callback to run if the route is requsted
server.all("*", (req, res) => {
  res.send(`<h1>This is the home page</h1>`);
});

const PORT = 3333;

server.listen(PORT, () => {
  console.log(`\n *** Server is listening on port ${PORT} ***\n`);
});

// setInterval(() => {
//   console.log("1 second");
// }, 1000);
