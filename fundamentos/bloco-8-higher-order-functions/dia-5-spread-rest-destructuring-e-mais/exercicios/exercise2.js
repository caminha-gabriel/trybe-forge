// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .

function sum (...rest) {
  return rest.reduce((acc, curr) => acc + curr)
};

console.log(sum(2, 4, 5, 1 ,2 ,1 ,2));