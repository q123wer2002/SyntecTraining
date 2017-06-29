'use strict'

const pg = require('pg');

//postgre sql connect config
var connectionString = {
	host: 'localhost', // Server hosting the postgres database
	port: 5432, //env var: PGPORT
	user: 'postgres', //env var: PGUSER
	password: 'syntec1234', //env var: PGPASSWORD
	database: 'SyntecCloud', //env var: PGDATABASE
	max: 10, // max number of clients in the pool
	idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};
const pool = new pg.Pool(connectionString);

//for connect error
pool.on('error', function (err, client) {
  console.error('idle client error', err.message, err.stack);
});

//HOMEWORK, to finish sql CRUD method (CREATE, READ, UPDATE, DELETE)
//resource : "https://github.com/brianc/node-postgres"
var PostgreApi = {};
PostgreApi.Query = function(szQuery, fnResponse){
	return pool.query(szQuery, fnResponse);
}

module.exports = PostgreApi;
