const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

  // escreva seu código aqui
const arrayOfLowerConcat = () => {
  let concat = names.reduce((acc, curr) => {
    return acc.concat(curr);
  });
  return concat.toLowerCase().split('');
};

const countCharacter = (array, character) => {
  let counter = 0;
  array.forEach((element) => element === character ? counter++ : undefined);
  return `Your array has ${counter} of the "${character}" character.`;
}; 
console.log(countCharacter(arrayOfLowerConcat(), 'a'));