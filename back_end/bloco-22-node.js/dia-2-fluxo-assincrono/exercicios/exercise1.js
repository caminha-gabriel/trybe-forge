function mathPromise(num1, num2, num3) {
  return new Promise((resolve, reject) => {
    if (
      typeof (num1) != 'number'
      || typeof (num2) != 'number'
      || typeof (num3) != 'number'
    ) reject(new Error('Error: Only numbers are accepted'));

    const sumAndMultiply = (num1 + num2) * num3;
    if (sumAndMultiply < 50) reject(new Error('Error: Value lower than 50'))
    resolve(sumAndMultiply);
  });
};

// mathPromise(1, 2, 3)
//   .then((response) => console.log(`Your math promise resolved with the number: ${response}`))
//   .catch((err) => console.error(err.message));

module.exports = {
  mathPromise,
};