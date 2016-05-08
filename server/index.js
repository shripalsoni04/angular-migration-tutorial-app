var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes');

var app = express();
app.use(bodyParser.json());

app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

routes(app);

var server = app.listen(9000, function(){
    /*eslint no-console: "off" */
    console.log("Listening on port %s...", server.address().port);
});