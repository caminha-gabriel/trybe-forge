let readlineSync = require('readline-sync');

const convertionOptions: any = ['Distance', 'Weight', 'Capacity', 'Area', 'Volume'];
const chosenConvertion: number = readlineSync.keyInSelect(convertionOptions, 'Select a convertion option');

switch (chosenConvertion) {
  case 1:
    require('./exercise5');
    break;
  case 2:
    require('./exercise6');
    break;
  case 3:
    require('./exercise7');
    break;
  case 4:
    require('./exercise8');
    break;
  case 5:
    require('./exercise9');
    break;

  default:
    break;
}