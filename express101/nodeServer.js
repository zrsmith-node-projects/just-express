const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log(req.headers.host);
  console.log(req.url);

  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    // res.write("<h1>Node server is running</h1>");
    const homePageHTML = fs.readFileSync("node.html");
    res.write(homePageHTML);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write(
      `<h4>Sorry, ${req.url}, this is not the page you are looking for!</h4>`
    );
    res.end();
  }

  // writehead takes 2 args
  // 1. status code
  // 2. object for mime-type
  // res.writeHead(200, { "content-type": "text/html" });
  // res.write("<h1>Node server is running</h1>");
  // res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`\n *** Server is listening on port ${PORT} *** \n`);
});
