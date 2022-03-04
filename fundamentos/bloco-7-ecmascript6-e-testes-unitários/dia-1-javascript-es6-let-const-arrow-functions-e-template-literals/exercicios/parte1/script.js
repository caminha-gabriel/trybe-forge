// const testingScope = escopo => {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     elseScope = `${elseScope} ótimo, fui utilizada no meu escopo !`;
//     console.log(elseScope);
//   }

// }

// testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// BIGGER VERSION, DO NOT USE THE SHORTCUT OF SORT METHOD

// const returnSorted = numbers => {   
  
//   return numbers.sort((a,b) => {
//     if (a > b) return 1;
//     if (a < b) return -1;
//     return 0;
//   })
// }

// SHORT VERSION, SIMPLE DUE TO ARRAY ITENS BEING NUMBERS (ARROW FUNCTION USED)

// const returnSorted = numbers => numbers.sort((a,b) => a - b);
// console.log(returnSorted(oddsAndEvens));

// SHORTER VERSION THAT DONT USE VARIABLES, JUST A LOG WITH TEMPLATE LITERALS AND AN ARROW FUNCTION

console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} estao ordenados!`);