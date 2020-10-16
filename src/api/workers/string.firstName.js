const connection = require("../../database");

module.exports.string$firstName = () =>
  new Promise((resolve) => {
    connection.query(
      "SELECT first_name FROM first_names ORDER BY RAND() LIMIT 1 ",
      (err, data) => {
        resolve(data[0].first_name);
      }
    );
  });
