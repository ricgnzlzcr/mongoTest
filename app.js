var express = require('express'),
    app = express(),
    ricdb = require('./js/ricdb');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/public/views/pages');

app.get('/', function(req, res) {
    var name = 'Ricardo';
    var content = "This is Ricardo's awesome page";

    ricdb.getAllEntries().then(function(doc) {
        console.log(doc);
        res.render('index', doc);
    });
});



app.listen(3000);
console.log("Express server running on port 3000 bitches!");