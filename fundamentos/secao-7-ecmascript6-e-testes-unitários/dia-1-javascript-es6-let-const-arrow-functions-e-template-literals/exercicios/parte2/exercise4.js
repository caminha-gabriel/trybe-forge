const changeXString = (addIt) => {
  const xString = `if you ${addIt} into the abyss, the abyss also ${addIt} into you.`
  return xString;
};

const wordsArray = ['Brawm', 'Finesse', 'Resolve', 'Wits', 'Panache'];

const concatItAll = (words, xString) => {
  words.sort();
  return `${xString} (Also, after this cool phrase, here's some useless words: ${words[0]}, ${words[1]}, ${words[2]}, ${words[3]}, ${words[4]})`;
};

console.log(concatItAll(wordsArray, changeXString('yells')));