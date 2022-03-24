// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const specObj = {
    method: 'GET',
    headers: { "Accept": 'application/json' }
  };

  fetch(API_URL, specObj)
  .then((response) => response.json())
  .then((data) => data.joke)
  .then((joke) => document.getElementById('jokeContainer').innerHTML = joke)
  .catch((error) => console.log(error));
};

window.onload = () => fetchJoke();
