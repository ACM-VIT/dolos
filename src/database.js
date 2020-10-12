
var mysql = require('mysql');
const dotenv = require("dotenv");
dotenv.config();


var con = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'yourUser',
  password: process.env.DB_PASS || 'yourPass',
  port: process.env.DB_PORT || 3000
});


var connectMysql = function() {
  con.connect(function(err) {
    if (err) {
      console.log(err);
      
      // retry added after 10 seconds to avoid failure of mysql
      setTimeout(function() {
        connectMysql();
      }, 10000);
    }
    console.log("Connected!");
  });
};

connectMysql();
