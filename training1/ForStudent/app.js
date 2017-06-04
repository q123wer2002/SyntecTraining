//library
var express = require('express');
var app = express();

//all environments
app.use(express.static('public'));
app.use('/static', express.static('public'));

//local var
const nListenPort = 8888;

//for router
app.get('/', function(req,res){
	res.send('Hello World');
});

//for listen port
app.listen(nListenPort, function(){
	console.log('App listening on port ' + nListenPort);
});