var express = require('express');
var app = express();
app.get('/', function(request, response){
	response.send("hii evryone");
});

module.exports = app;