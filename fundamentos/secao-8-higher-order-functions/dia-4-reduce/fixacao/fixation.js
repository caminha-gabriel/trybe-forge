// Neste exemplo, serão comparados valores para buscar o maior valor em um array. Tente criar essa função apenas com for e depois tente com reduce . Caso não consiga, olhe a solução abaixo:

const numbers = [50, 85, -30, 3, 15];

const biggerWithFor = (array) => {
  let bigger = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > bigger) {
      bigger = array[i];
    };
  };
  return bigger;
};
console.log(biggerWithFor(numbers));

const bigger = (array) => array.reduce((acc, cur) => acc > cur ? acc : cur);
console.log(bigger(numbers));