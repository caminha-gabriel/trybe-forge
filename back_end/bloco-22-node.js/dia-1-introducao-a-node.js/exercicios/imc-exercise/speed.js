const readline = require('readline-sync');

const calculateSpeed = (distance, time) => distance / time;

const main = () => {
  console.log('Average Speed Calculator');
  const distance = readline.questionInt('What\'s the distance in meters? ');
  const time = readline.questionInt('What\s the time in seconds? ');
  console.log(`Your object has a ${calculateSpeed(distance, time).toFixed(2)} m/s average speed!`);
};

main();

module.exports = {
  calculateSpeed
};