var express = require('express');
var app = express();
var motivations = require('motivations');
var pickone = require('pick-one');

app.get('/', function(request, response){
	//response.send("hii evryone");
	//response.send(motivations[9]);
	response.send(pickone(motivations));
});

module.exports = app;