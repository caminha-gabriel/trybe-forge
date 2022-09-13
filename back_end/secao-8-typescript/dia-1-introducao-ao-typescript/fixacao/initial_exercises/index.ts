import * as Exercise from './exercises';

console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`Array sum is equal to ${Exercise.sumArray([3, 6, 9])}`);

console.log(`Triangle with 10cm of base and 25cm of height: ${Exercise.triangleArea(10, 25)}cm²`);
console.log(`Triangle with 5cm of base and 30cm of height: ${Exercise.triangleArea(5, 30)}cm²`);
console.log(`Triangle with 100cm of base and 200cm of height: ${Exercise.triangleArea(100, 200)}cm²`);

console.log(`Square with 10cm side: ${Exercise.squareArea(10)}cm²`);
console.log(`Square with 5cm side: ${Exercise.squareArea(5)}cm²`);
console.log(`Square with 100cm side: ${Exercise.squareArea(100)}cm²`);

console.log(`Rectangle with 10cm of base and 25cm of height: ${Exercise.rectangleArea(10, 25)}cm²`);
console.log(`Rectangle with 5cm of base and 30cm of height: ${Exercise.rectangleArea(5, 30)}cm²`);
console.log(`Rectangle with 100cm of base and 200cm of height: ${Exercise.rectangleArea(100, 200)}cm²`);