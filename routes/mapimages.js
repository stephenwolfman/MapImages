var MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    db;

var databaseUrl = "mongodb://wolfman:SilverRoverV8@ds027489.mongolab.com:27489/heroku_app27229592"; // "username:password@example.com/mydb"
var collections = ["MapImages"]

var mongoClient;// = new MongoClient(new Server('localhost', 27017));

// Initialize connection once
MongoClient.connect(databaseUrl, function(err, database) {
  if(err) throw err;

  db = database;
});

exports.intro = function(req, res) {
    res.send('Map Images Node app');
};
 
exports.findById = function(req, res) {
    console.log(req.params);
    var id = parseInt(req.params.id);
    console.log('findById: ' + id);
    db.collection('MapImages', function(err, collection) {
        collection.findOne({'MapImageId': id}, function(err, item) {
            console.log(item);
            res.jsonp(item);
        });
    });
};


exports.findAll = function(req, res) {
    db.collection('MapImages', function(err, collection) {

        collection.find().toArray(function(err, items) {
            res.jsonp(items);
        });
    });
};

exports.findBySender = function(req, res) {
    console.log(req.params);
    var sender = req.params.id;
    console.log('findBySender: ' + sender);
    db.collection('MapImages', function(err, collection) {
        collection.find({"SentBy": sender}).toArray(function(err, items) {
            console.log(items);
            res.jsonp(items);
        });
    });
};

exports.getMarkerImage = function(req, res) {
    console.log(req.params);
    db.collection('ImageStore', function(err, collection) {
        collection.findOne({'ImageStoreId': 'MapImage1'}, function(err, doc) {
            res.jsonp(doc);
        });
    });
};




exports.uploader = function(req, res){
    console.log('test');
    
    var filesBase64 = [];
 
    console.log(req.files);
    req.pipe(req.busboy);
    req.busboy.on('file', function (fieldname, file, filename) {
        console.log("Uploading: " + filename); 
        console.log(file); 
    });

    res.end(); // end the response
};


