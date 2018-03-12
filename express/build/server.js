var PORT = 8080;

var express = require('express');
var app = express();

app.use(express.static('public'));

var server = app.listen(PORT, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Server runing at port: ', PORT, '.');
});
