// Para fixar ainda mais conceito de reduce , faça uma função que some todos os números pares do array:

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const pairsOf = (array) => array.filter((el) => !(el % 2));

const sumOf = ((array) => array.reduce((acc, cur) => acc + cur));

console.log(sumOf(pairsOf(numbers)));

const pairsWithReduceOnly = (array) => array.reduce((acc, cur) => {
  if (cur % 2 === 0) {
    return acc + cur
  }
  return acc
});

console.log(pairsWithReduceOnly(numbers));