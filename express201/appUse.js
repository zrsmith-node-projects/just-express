const express = require("express");
const server = express();

function validateUser(req, res, next) {
  res.locals.validated = true;
  console.log("VALIDATED RAN");
  next();
}

// validateUser at app level, all paths and all methods
// server.use(validateUser);
// validateUser on /user on all methods
server.use("/user", validateUser);
// validateUser on /user only the GET method
// server.get('/user', validateUser)

// to only validateUser middleware on /user path
//server.get('/user', validateUser, (req, res) => {})
server.get("/", (req, res) => {
  res.send(`<h1>Main page test</h1>`);
});

server.get("/user", (req, res) => {
  res.send(`<h2>User page</h2>`);
  console.log(res.locals.validated);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`\n *** Server listening on port ${PORT} *** \n`);
});
