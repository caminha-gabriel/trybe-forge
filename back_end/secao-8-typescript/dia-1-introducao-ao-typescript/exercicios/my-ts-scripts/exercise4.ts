let readlineSync = require('readline-sync');
import { months } from './exercise2';
import { seasons } from './exercise3';

const monthsArray: any = Object.values(months).splice(0, 12);
const hemespheresArray: any = ['North', 'South'];

const selectedMonth: string = readlineSync.keyInSelect(monthsArray, 'Select a month');
const selectedHemesphere: string = readlineSync.keyInSelect(hemespheresArray, 'Select a hemesphere');


function checkHemesphere(hemesphere: string): string {
  const month: string = monthsArray[selectedMonth];
  console.log(monthsArray, month);

  if (hemesphere === 'North') {
    switch (true) {
      case month === 'January' || month === 'February':
        return seasons.Winter;
      case month === 'March':
        return seasons.Winter + ' ' + seasons.Spring;
      case month === 'April' || month === 'May':
        return seasons.Spring;
      case month === 'June':
        return seasons.Spring + ' ' + seasons.Summer;
      case month === 'July' || month === 'August':
        return seasons.Summer;
      case month === 'September':
        return seasons.Summer + ' ' + seasons.Fall;
      case month === 'October' || month === 'November':
        return seasons.Fall;
      case month === 'December':
        return seasons.Fall + ' ' + seasons.Winter;
      default:
        return 'Something went wrong';
    }
  }

  if (hemesphere === 'South') {
    switch (true) {
      case selectedMonth === 'January' || selectedMonth === 'February':
        return seasons.Summer;
      case selectedMonth === 'March':
        return seasons.Summer + ' ' + seasons.Fall;
      case selectedMonth === 'April' || selectedMonth === 'May':
        return seasons.Fall;
      case selectedMonth === 'June':
        return seasons.Fall + ' ' + seasons.Winter;
      case selectedMonth === 'July' || selectedMonth === 'August':
        return seasons.Winter;
      case selectedMonth === 'September':
        return seasons.Winter + ' ' + seasons.Spring;
      case selectedMonth === 'October' || selectedMonth === 'November':
        return seasons.Spring;
      case selectedMonth === 'December':
        return seasons.Spring + ' ' + seasons.Summer;
      default:
        return 'Something went wrong'
    }
  }
}

console.log(`In ${monthsArray[selectedMonth]}, the ${hemespheresArray[selectedHemesphere]} Hemesphere is passing through ${checkHemesphere(selectedHemesphere)}`);
