// Faça uma lista com as suas frutas favoritas
const specialFruit = ['grape', 'strawberry', 'banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['honey', 'milk', 'cereal'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));