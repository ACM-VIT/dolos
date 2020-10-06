var mysql = require('mysql');
var config = require('dotenv').config();

var connectionString = {
  host: "localhost",
  user: config.parsed.DB_USER || "yourusername",
  password: config.parsed.DB_PASS || "yourpassword"
};

var con = mysql.createConnection(connectionString);

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});