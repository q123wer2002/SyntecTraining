'use strict'

//lib
var express = require('express');
var app = express();
var postgreApi = require('./postgreapi');

//HOMEWORK, need to know that how nodejs can to connect to postgreSQL
//HOMEWORK, to finish sql CRUD method (CREATE, READ, UPDATE, DELETE)
//resource : "http://expressjs.com/zh-tw/guide/routing.html"
app.route('/myShoppingCart')
	.get(function(req,res,next){
		//use postgre api to post data into database
		postgreApi.Query('SELECT * FROM rawdata LIMIT 100',function(err,data){
			if(err){
				return res.status(500).json({success: false, data: err});
			}

			 return res.json(data);
		});
	})
	.post(function(req,res,next){
		res.json(req.body);
		var objData = req.body;

		//use postgre api to post data into database
		postgreApi.Query('INSERT INTO xxxx VALUES xxxxx', function(err,data){
			if(err){
				return res.status(500).json({success: false, data: err});
			}

			 return res.json(data);
		});
	});

module.exports = app;