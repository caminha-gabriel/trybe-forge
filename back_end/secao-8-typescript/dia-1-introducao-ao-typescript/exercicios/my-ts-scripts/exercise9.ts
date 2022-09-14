let readlineSync = require('readline-sync');
const units: any = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];

function convertVolume(value: number, baseUnity: string, convertUnity: string): number {

  const baseIndex: number = units.indexOf(baseUnity);
  const convertIndex: number = units.indexOf(convertUnity);
  const exponent: number = (convertIndex - baseIndex);

  return value * Math.pow(1000, exponent);
}

function exec(): void {
  const selectedValue: number = parseFloat(readlineSync.question('Write a value: '));
  const selectedBase: string = readlineSync.question('Write the base unit: ');
  const selectedConvertion: string = readlineSync.question('Write the convertion unit: ');

  const result: number = convertVolume(selectedValue, selectedBase, selectedConvertion);

  console.log(`${selectedValue + selectedBase} is equal ${result + selectedConvertion}`);
}

exec();