// 6 - Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é modelado como um array. Porém, essa modelagem está baixo nível. Cria uma função toObject que, dada uma lista, retorna um objeto representando o carro:
// Dica: use array destructuring e abbreviation object literal .

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const toObject = (car) => {
  const [ carName, manufacturer, releaseDate ] = car;
  const carObj = {
    carName, 
    manufacturer, 
    releaseDate,
  }
  return carObj;
};

console.log(toObject(palio));
console.log(toObject(shelbyCobra));
console.log(toObject(chiron));