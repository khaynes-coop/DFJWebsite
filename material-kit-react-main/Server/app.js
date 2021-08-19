const http = require("http");
var mail = require("./Email");
const hostname = "127.0.0.1";
const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  try {
    mail;
    res.write("Sent");
  } catch (error) {
    console.log(error);
    res.write("Error");
  }
  res.write("Hello World");
});
server.listen(port, hostname, () => {
  console.log("Server running at http://${hostname}:${port}/");
});
