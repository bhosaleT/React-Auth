// This is where we start with our server.
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();

//App setup.
app.use(morgan("combined"));
app.use(
  bodyParser.json({
    type: "*/*"
  })
);

//server setup.

const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on: ", port);
