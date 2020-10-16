module.exports.number$inRange = (__min = 0, __max) =>
  new Promise((resolve) => {
    if (Number.isNaN(__max)) {
      __max = __min * 10 + 10;
    }
    resolve(Math.floor(Math.random() * __max + __min) + 1);
  });
