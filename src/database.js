const mysql = require("mysql");

const con = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "yourUser",
  password: process.env.DB_PASS || "yourPass",
});

/** causes the resource leak in jest */
con.connect((err) => {
  if (err) throw err;
});
