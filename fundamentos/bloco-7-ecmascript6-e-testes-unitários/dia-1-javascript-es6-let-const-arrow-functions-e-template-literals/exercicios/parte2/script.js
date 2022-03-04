// const returnFatorial = number => {
//   let sum = number;
//   for (let i = number - 1; i > 1; i--) {
//     sum = sum * i
//   }
//   if (number === 0) sum = 1;
//   return sum
// }

// console.log(returnFatorial(0));


const returnFatorial = number => number === 0 ? 1 : number * returnFatorial(number - 1);

console.log(returnFatorial(4));