let readlineSync = require('readline-sync');
const units: any = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];

function convertArea(value: number, baseUnity: string, convertUnity: string): number {

  const baseIndex: number = units.indexOf(baseUnity);
  const convertIndex: number = units.indexOf(convertUnity);
  const exponent: number = (convertIndex - baseIndex);

  return value * Math.pow(100, exponent);
}

function exec(): void {
  const selectedValue: number = parseFloat(readlineSync.question('Write a value: '));
  const selectedBase: string = readlineSync.question('Write the base unit: ');
  const selectedConvertion: string = readlineSync.question('Write the convertion unit: ');

  const result: number = convertArea(selectedValue, selectedBase, selectedConvertion);

  console.log(`${selectedValue + selectedBase} is equal ${result + selectedConvertion}`);
}

exec();