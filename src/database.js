var mysql = require('mysql');
var config = require('dotenv').config();

var connectionString = {
  host: "localhost",
  user: "root",
  password: "root"
};

if (config.parsed) {
  connectionString.user = config.parsed.DB_USER;
  connectionString.password = config.parsed.DB_PASS;
}

var con = mysql.createConnection(connectionString);

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});