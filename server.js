var port = '9090';
var host = '0.0.0.0';

var express = require('express');
var app = express();

app.listen(port, host);
console.log("Server is listening...");