const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'sqlrootcam',
  database: 'rest_exercises'});

module.exports = connection;