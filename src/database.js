const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'yourusername',
  password: 'yourpassword',
});

con.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});
