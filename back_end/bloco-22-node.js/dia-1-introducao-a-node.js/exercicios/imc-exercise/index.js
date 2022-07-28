const readline = require('readline-sync');
const scriptOptions = ['Imc Calculator', 'Average Speed', 'Guess a Number'];
const chosenScript = readline.keyInSelect(scriptOptions, 'Which script do you want to use? ');


const main = () => {
  console.log(chosenScript);
if(chosenScript === 0) require('./bmi');
if(chosenScript === 1) require('./speed');
if(chosenScript === 2) require('./guessNumber');
};

main();