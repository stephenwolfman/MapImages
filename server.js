//



var express = require("express");
var logfmt = require("logfmt");
var mapimages = require('./routes/mapimages');
 
var app = express();

app.get('/mapimages/sentby/:id', mapimages.findBySender);
app.get('/mapimages/:id', mapimages.findById);
app.get('/mapimages', mapimages.findAll);

app.listen(1343);
console.log('Listening on port 1343...');