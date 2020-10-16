const connection = require("../../database");

module.exports.string$lastName = () =>
  new Promise((resolve) => {
    connection.query(
      "SELECT last_name FROM last_names ORDER BY RAND() LIMIT 1 ",
      (err, data) => {
        resolve(data[0].last_name);
      }
    );
  });
