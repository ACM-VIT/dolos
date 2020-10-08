const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'yourusername',
  password: 'yourpassword',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});
