var mysql = require('mysql');

var con = mysql.createConnection({
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "yourusername",
  password: process.env.MYSQL_PASSWORD || "yourpassword",
  database: process.env.MYSQL_DB || "yourdatabase",
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


