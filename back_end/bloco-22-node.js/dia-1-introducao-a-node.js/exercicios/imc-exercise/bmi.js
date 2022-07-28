const readline = require('readline-sync');

const checkBmiTable = (bmi) => {
  let targetValue;
  if(bmi < 18.5) targetValue = 'Thinness';
  if(bmi >= 18.5 && bmi < 25.0) targetValue = 'Normal';
  if(bmi >= 25.0 && bmi < 30.0) targetValue = 'Overweight';
  if(bmi >= 30.0 && bmi < 35.0) targetValue = 'Obese Class I';
  if(bmi >= 35.0 && bmi < 40.0) targetValue = 'Obese Class II';
  if(bmi >= 40.0) targetValue = 'Obese Class III';
  return targetValue;
};

const calculateBmi = (weight, centHeight) => {
  const result = weight / ((centHeight / 100 ) ** 2);
  const bmiArray = [result, checkBmiTable(result)];
  return bmiArray;
};

const bmiMainInteraction = () => {
  console.log('Bmi Calculator(Body Mass Index)');
  const weight = readline.questionInt('What\s your weight in kilograms? ');
  const height = readline.questionInt('What\s your height in centimeters? ');
  const bmiArray = calculateBmi(weight, height);
  console.log(`Your Bmi is ${bmiArray[0].toFixed(2)}, caracterized as: "${bmiArray[1]}"`);
};

bmiMainInteraction();

module.exports = {
  bmiMainInteraction
};