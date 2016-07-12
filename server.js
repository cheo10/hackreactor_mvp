var express = require('express');
var path = require('path');
var logger = require('morgan');
var http = require('http');

var app = express();

app.set('port', process.env.PORT || 3000);

//serve static files
app.use(express.static(__dirname + '/client'));

app.listen(app.get('port'), function(){
  console.log('Server Up');
});