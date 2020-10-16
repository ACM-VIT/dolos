const connection = require("./../../database");

module.exports.string$country = () =>
  new Promise((resolve) => {
    connection.query(
      "SELECT country FROM countries ORDER BY RAND() LIMIT 1 ",
      (err, data) => {
        resolve(data[0].country);
      }
    );
  });
