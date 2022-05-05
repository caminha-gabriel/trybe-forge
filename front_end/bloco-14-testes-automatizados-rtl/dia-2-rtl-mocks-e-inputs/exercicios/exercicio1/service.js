
const randomNumberGenerator = () => {
  const number = Math.floor(Math.random() * (100 - 9) + 0);
  return number;
}

const toUpperCase = (string) => {
  return string.toUpperCase();
}

const firstCharacter = (string) => {
  return string[0];
}

const concatStrings = (string1, string2) => {
  return string1 + string2;
}

const fetchDogPicturesAPI = async ()  => {
 const URL = 'https://dog.ceo/api/breeds/image/random';
 const response = await fetch(URL).resolved();
 console.log(response);
 const json = await response.json();

 return json;
}

fetchDogPicturesAPI();
module.exports = {
  randomNumberGenerator,
  toUpperCase,
  firstCharacter,
  concatStrings,
  fetchDogPicturesAPI,
};