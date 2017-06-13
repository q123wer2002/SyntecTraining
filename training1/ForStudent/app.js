'use strict'

//library
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var restfulapi = require('./apis/restfulapi');

//all environments
app.use(express.static(__dirname + '/public'));
app.use('/static', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//local var
const nListenPort = 8888;
var szPublicPath = __dirname + "\\public\\";

//for db restfulapi
app.use('/api', dbapi);

//for router
app.get('/', function(req,res,next){  //localhost:[nListenPort]
	res.sendFile(szPublicPath + "shopping.html");
});
app.get('/checkorder', function(req,res,next){  //localhost:[nListenPort]/shoppingcart
	res.sendFile(szPublicPath + "checkorder.html");
});

//for listen port
app.listen(nListenPort, function(){
	console.log('App listening on port ' + nListenPort);
});