'use strict'

const pg = require('pg');

//postgre sql config
var connectionString = {
	user: 'foo', //env var: PGUSER
	database: 'my_db', //env var: PGDATABASE
	password: 'secret', //env var: PGPASSWORD
	host: 'localhost', // Server hosting the postgres database
	port: 5432, //env var: PGPORT
	max: 10, // max number of clients in the pool
	idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

//HOMEWORK
//resource :
//http://mherman.org/blog/2015/02/12/postgresql-and-nodejs/#.WTlIPlWGOUk

var PostgreApi = {};
PostgreApi.Query = function(szQuery, fnResponse){
	const results = [];
	// Get a Postgres client from the connection pool
	pg.connect(connectionString, function(err, client, fnResponse){
		// Handle connection errors
		if(err) {
			return fnResponse(err);
		}

		// SQL Query > Select Data
		const query = client.query(szQuery);
		// Stream results back one row at a time
		query.on('row', function(row){
			results.push(row);
		});

		// After all data is returned, close connection and return results
		query.on('end', function(){
			return fnResponse(false,results);
		});
	});
}

module.exports = PostgreApi;
