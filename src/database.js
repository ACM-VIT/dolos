
var mysql = require('mysql');
const dotenv = require("dotenv");
dotenv.config();


var con = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'yourUser',
  password: process.env.DB_PASS || 'yourPass',
  port: process.env.DB_PORT || 3000});


con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!")
})

