const path = require("path");
const express = require("express");

const server = express();
const helmet = require("helmet");
server.use(helmet());
server.use(express.static("public"));
server.use(express.json());
server.use(express.urlencoded());

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));

server.get("/", (req, res) => {
  res.render("index");
});

const PORT = 3333;
server.listen(PORT, () => {
  console.log(`\n *** Server is listening on port ${PORT} *** \n`);
});
