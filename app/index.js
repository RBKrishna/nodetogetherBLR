var express = require('express');
var app = express();
var motivations = require('motivations');

app.get('/', function(request, response){
	//response.send("hii evryone");
	response.send(motivations[9]);
});

module.exports = app;