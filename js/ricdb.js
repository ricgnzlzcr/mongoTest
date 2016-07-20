var MongoClient = require('mongodb').MongoClient;


function connectToDB() {
    return new Promise(function(resolve, reject) {
        MongoClient.connect('mongodb://localhost:27017/ricdb', function(err, db) {
            if (err) {
                console.log("Error connecting to MongoDB!!!");
                reject()
            }
            resolve(db);
        });   
    });   
}

function closeDB() {
    ricdb.close();
    ricdb = undefined;
}

function getAllEntries() {
    return new Promise(function(resolve, reject) {
        connectToDB()
        .then(function(db) {
            db.collection('ric').findOne({}, function(err, doc) {
                if (err) console.log("Error finding doc");
                resolve(doc);
                db.close();
            });
            console.log("RAN THE DATABASE COMMAND!!!!!");
        });
    });
    
}


module.exports = {getAllEntries : getAllEntries};