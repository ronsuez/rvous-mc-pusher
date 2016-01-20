//Require Express (HTTP server)
// http://expressjs.com
var express = require("express");
var app = express();
var server = require("http").createServer(app);

// Configure Express server

// Webhook endpoint
app.get("/", function(req, res) {
  console.log('index');
  // Respond with a success code
  res.sendStatus(200);
});

// Webhook endpoint
app.post("/client_event", function(req, res) {
  var timestamp = req.body.time_ms;
  var events = req.body.events;

  console.log(events);

  // Respond with a success code
  res.send(200);
});

// Set up HTTP server to listen on system port, or port 5000
server.listen(process.env.PORT || 5000);
