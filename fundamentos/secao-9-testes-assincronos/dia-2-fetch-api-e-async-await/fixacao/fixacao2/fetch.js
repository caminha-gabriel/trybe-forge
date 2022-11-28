const fetch = require('node-fetch');

// const fetchJoke = () => {
//   // remove 'https://' from url to force a catch error
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data.value))
//   .catch((error) => console.log(`Algo deu errado :( \n${error}`));
// }

// fetchJoke();

// const fetchJokeWithAsyncAwait = async () => {
//   const url = 'https://api.chucknorris.io/jokes/random?caregory=dev';

//   const result = await fetch(url)
//   .then((response) => response.json())
//   .then((data) => data.value)
//   .catch((error) => `Algo deu errado na função com async :( \n${error}`);

//   console.log(result);
// }

// fetchJokeWithAsyncAwait();

const tryAndCatchFetchJokeWithAsyncAwait = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?caregory=dev';

  try {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.value);
  } catch(error) {
    console.log(`Algo deu errado :( \n ${error}`);
  }
}

tryAndCatchFetchJokeWithAsyncAwait();