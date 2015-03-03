var mongojs = require('mongojs');
var express = require('express');

var uri = "mongodb://localhost/recipes",
    db = mongojs.connect(uri);
var app = express();

app.get('/', function (req,res) {
   res.sendfile('./addrecipe.html')
});

app.post('/addrecipe', function (req,res) {
   
});

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('http://localhost:3000/', host, port)

})