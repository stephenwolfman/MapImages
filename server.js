//Server.js
var express = require("express");
var logfmt = require("logfmt");
var mapimagesapi = require('./routes/mapimages');
var content = require('./routes/content');
 
var app = express();

app.get('/mapimages/sentby/:id', mapimagesapi.findBySender);
app.get('/mapimages/:id', mapimagesapi.findById);
app.get('/mapimages', mapimagesapi.findAll);
app.get('/', content.intro);
app.get('/imagelist', content.imageList);

//Get port dynamically in prod/run on 1343 dev
var port = Number(process.env.PORT || 1343);
app.listen(port, function() {
  console.log("Listening on " + port);
});