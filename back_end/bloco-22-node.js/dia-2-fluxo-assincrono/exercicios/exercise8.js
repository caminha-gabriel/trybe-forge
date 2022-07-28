async function fizzBuzzCalculator(number) {
  try {
    return new Promise((resolve, reject) => {
      if(number % 5 === 0 && number % 3 === 0) resolve('FizzBuzz');
      if(number % 3 === 0) resolve('Fizz');
      if(number % 5 === 0) resolve('Buzz');
      reject(new Error(`number ${number} is not a FizzBuzz`));
    })
  } catch (err) {
    console.error(err.message);
  }
};

const main = async (number) => {
  const response = await fizzBuzzCalculator(number);
  console.log(response);
}

main(35);