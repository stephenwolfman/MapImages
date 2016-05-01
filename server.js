//Server.js
var express = require("express");
var logfmt = require("logfmt");
var mapimages = require('./routes/mapimages');
 
var app = express();

app.get('/mapimages/sentby/:id', mapimages.findBySender);
app.get('/mapimages/:id', mapimages.findById);
app.get('/mapimages', mapimages.findAll);

//Get port dynamically in prod/run on 1343 dev
var port = Number(process.env.PORT || 1343);
app.listen(port, function() {
  console.log("Listening on " + port);
});