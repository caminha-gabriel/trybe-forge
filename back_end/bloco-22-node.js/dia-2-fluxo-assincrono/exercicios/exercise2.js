const { mathPromise } = require('./exercise1');

const num1 = Math.ceil(Math.random() * 100);
const num2 = Math.ceil(Math.random() * 100);
const num3 = Math.ceil(Math.random() * 100);

mathPromise(num1, num2, num3)
  .then((response) => console.log(response))
  .catch((err) => console.error(err.message));