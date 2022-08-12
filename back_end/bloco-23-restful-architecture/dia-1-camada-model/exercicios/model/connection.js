const mysql = require('mysql2/promise');

const connection = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'sqlrootcam',
	database: 'msc_exercise' });

module.exports = connection;