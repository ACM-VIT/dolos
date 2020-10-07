var mysql = require('mysql');

var con = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});