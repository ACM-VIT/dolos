module.exports.string$enum = (enumArray) =>
  new Promise((resolve) => {
    resolve(enumArray[Math.floor(Math.random() * enumArray.length)]);
  });
