const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req.headers.host);

  // writehead takes 2 args
  // 1. status code
  // 2. object for mime-type
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<h1>Node server is running</h1>");
  res.end();
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`\n *** Server is listening on port ${PORT} *** \n`);
});
