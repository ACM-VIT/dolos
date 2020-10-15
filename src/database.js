const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "user",
  password: process.env.DB_PASS || "pass",
});

/** causes the resource leak in jest */
connection.connect((err) => {
  if (err) throw err;
});

module.exports = connection;

