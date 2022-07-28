const { mathPromise } = require('./exercise1');

const num1 = Math.ceil(Math.random() * 100);
const num2 = Math.ceil(Math.random() * 100);
const num3 = Math.ceil(Math.random() * 100);

async function main() {
  try {
    const response = await mathPromise(num1, num2, num3);
    console.log(response);
  } catch (err) {
    console.error(err.message);
  };
};

main();