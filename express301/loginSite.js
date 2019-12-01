const path = require("path");
const express = require("express");
const helmet = require("helmet");

const server = express();

server.use(helmet());
server.use(express.static("public"));
server.use(express.json());
server.use(express.urlencoded());

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));

server.get("/", (req, res) => {
  res.status(200).json({
    message: `NodeJS server with ExpressJS is running on ${PORT}`
  });
});

server.get("/login", (req, res) => {
  res.render("login");
});

const PORT = 3333;
server.listen(PORT, () => {
  console.log(`\n *** Server is listening on port ${PORT} *** \n`);
});
