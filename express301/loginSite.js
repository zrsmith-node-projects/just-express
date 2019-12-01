const path = require("path");
const express = require("express");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const server = express();

server.use(helmet());
server.use(express.static("public"));
server.use(express.json());
server.use(express.urlencoded());
server.use(cookieParser());

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

server.post("/process_login", (req, res) => {
  const user = req.body.username;
  const pwd = req.body.password;
  // res.cookie takes 2 args: 1, name of the cookie, 2. value to set to it

  if (pwd === "z") {
    res.cookie("user", user);
    res.redirect("/welcome");
  } else {
    res.redirect("/invalid?msg=fail");
  }

  // res.status(200).json(req.body);
});

server.get("/welcome", (req, res) => {
  res.render("welcome", {
    user: req.cookies.user
  });
});
server.get("/logout", (req, res) => {
  res.clearCookie("user");
  res.redirect("login");
});
server.get("/invalid", (req, res) => {
  res.render("invalid");
});

const PORT = 3333;
server.listen(PORT, () => {
  console.log(`\n *** Server is listening on port ${PORT} *** \n`);
});
