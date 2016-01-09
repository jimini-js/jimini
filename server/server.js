var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var jsonParser = bodyParser.json();
var port = process.env.PORT || 4568;

app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', function(req, res, next){
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.use(express.static(path.join(__dirname, '../client')));

app.listen(port);
console.log('Listening on port ' + port + '...');
