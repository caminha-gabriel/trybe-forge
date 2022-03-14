const longestWord = (phrase) => {
  let wordsArray = phrase.split(' ');
  let word = wordsArray[0];
  wordsArray.forEach((element) => {
    element.length > word.length ? word = element : undefined;
  });
  return word
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));