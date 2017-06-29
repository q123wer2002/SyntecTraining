'use strict'

//library
var express = require('express');
var app = express();
var session = require('express-session');

//all environments
// Use the session middlewar
app.use(session({ secret: 'SyntecTraining', cookie: {
		maxAge: 60000 , //alive 60 seconds
	}
}));

//local var
var m_objSession = {};

//session function
var isLogin = function(szSessionID, objSession){
	if( m_objSession[szSessionID] == undefined ){
		//create session
		m_objSession[szSessionID] = {
			isLoggin : false,
			szUserName : "",
			nViewTimes : 0,
			dateLogin : null,
		};

		return false;
	}

	if( m_objSession[szSessionID].isLoggin == true ){
		m_objSession[szSessionID].nViewTimes = m_objSession[szSessionID].nViewTimes + 1;
	}

	return m_objSession[szSessionID].isLoggin;
}


//export object
var session = {};

//default
session.isLogin = function(request){
	var objSession = request.session;
	var szSessionId = request.sessionID;

	return isLogin(szSessionId,objSession);
}
session.fnLoggin = function(request){

}
session.fnLogout = function(request){

}

module.exports = session;