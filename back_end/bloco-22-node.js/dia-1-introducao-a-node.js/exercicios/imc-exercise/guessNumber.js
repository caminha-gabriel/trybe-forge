const readline = require('readline-sync');

const guessNumber = () => {
  const correctNumber =  Math.ceil(Math.random() * 10);
  const userNumber = readline.questionInt('Guess a number between 1 and 10: ');
  
  if(correctNumber === userNumber) {
    console.log(`Congratulations! ${userNumber} was the correct number. You nailed it!`);
  } else {
    console.log(`Oops, you guessed the wrong number. Your guess was ${userNumber}, but the correct number is ${correctNumber}`)
  };
  const playAgain = readline.keyInYN('Want to play again?');
  if (playAgain) guessNumber();
  else console.log('Thanks for playing!');
};

guessNumber();

module.exports = {
  guessNumber
}