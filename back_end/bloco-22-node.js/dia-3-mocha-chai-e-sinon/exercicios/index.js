const fs = require('fs');

function checkNumberSignal(number) {
  try {
    if (typeof (number) !== 'number') return 'Error: Did not received a number';

    return number > 0 ? 'positive' : number < 0 ? 'negative' : 'neutral';
  } catch (e) {
    return e;
  }
};

module.exports = checkNumberSignal;