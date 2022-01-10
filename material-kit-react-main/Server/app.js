import config from "./Config/Config.js";
import express from "express";
import { connectToDatabase } from "./connectMongoDB.js";
import http from "http";
import mail from "./Email.js";

//connect to database
const db = connectToDatabase().on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);
db.once("open", () => {
  console.log("Successfully connected to mongoose database!");
});
const app = express();
//const http = require("http");
//var mail = require("./Email");
const hostname = "127.0.0.1";
const port = 5000;

// cd documents/github/dfjwebsite/material-kit-react-main/server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  
});
server.listen(port, hostname, () => {
  console.log("Server running at http://${hostname}:${port}/");
});
app.listen(config.port, () =>
  console.log(`App now listening on port ${config.port}`)
);
app.get('/', function (req, res) {
  var options = {'root':'material-kit-react-main/public/'};
  res.sendFile('index.html', {'root':'material-kit-react-main/public/'});
  try {
    mail;
    res.write("Sent");
  } catch (error) {
    console.log(error);
    res.write("Error");
  }
  res.write("Hello World");
});
// cd documents/github/dfjwebsite/material-kit-react-main/server