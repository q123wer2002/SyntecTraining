'use strict'

//library
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var restfulapi = require('./apis/restfulapi');
var sessionapi = require('./apis/sessionapi');

//all environments
app.use(express.static(__dirname + '/public'));
app.use('/static', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//local var
const nListenPort = 8888;
var szPublicPath = __dirname + "\\public\\";

//for db restfulapi
app.use('/api', restfulapi);

//for login page
app.get('/login', function(req,res,next){  //localhost:[nListenPort]
	if( sessionapi.isLoggin(req) == true ){
		res.redirect("/"); //redirect index page
		res.end();
	}

	res.sendFile(szPublicPath + "login.html");
});

//for index page
app.get('/', function(req,res,next){  //localhost:[nListenPort]/shoppingcart
	if( sessionapi.isLoggin(req) == false ){
		res.redirect("/login"); //redirect login page
		res.end();
	}

	res.sendFile(szPublicPath + "shopping.html");
});

//for checkorder page
app.get('/order', function(req,res,next){  //localhost:[nListenPort]/order
	if( sessionapi.isLoggin(req) == false ){
		res.redirect("/login"); //redirect login page
		res.end();
	}

	res.sendFile(szPublicPath + "order.html");
});

//for modify user authority page
app.get('/authority', function(req,res,next){  //localhost:[nListenPort]/modifyauthority
	if( sessionapi.isLoggin(req) == false ){
		res.redirect("/login"); //redirect login page
		res.end();
	}

	res.sendFile(szPublicPath + "authority.html");
});

//for listen port
app.listen(nListenPort, function(){
	console.log('App listening on port ' + nListenPort);
});