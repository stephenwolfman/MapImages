//Server.js
var express = require("express");
var logfmt = require("logfmt");
var mapimagesapi = require('./routes/mapimages');
var content = require('./routes/content');

var app = express();

app.get('/api/mapimages/sentby/:id', mapimagesapi.findBySender);
app.get('/api/mapimages/:id', mapimagesapi.findById);
app.get('/api/mapimages', mapimagesapi.findAll);
app.get('/', content.intro);
app.get('/imagelist', content.imageList);
app.get('/imagemap', content.imageMap);
app.get('/images/:id', content.imageMap);
app.get('/imagehandler/:id', content.imageHandler);


//Script files
app.get("/scripts/imagemap.js", function (req, res) {
    res.sendFile(__dirname + '/scripts/imagemap.js');
});

//Get port dynamically in prod/run on 1343 dev
var port = Number(process.env.PORT || 1343);
app.listen(port, function() {
  console.log("Listening on " + port);
});