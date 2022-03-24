const addCoinsToDOM = (coinsArray) => {
  const list = document.getElementById('criptoInfo');
  const topTenCoins = coinsArray.filter((coin) => coin.rank < 10);
  console.log(topTenCoins);
  topTenCoins.forEach((coinObj) => {
    let newLi = document.createElement('li');
    newLi.innerHTML = `${coinObj.name} (${coinObj.symbol}): $${Math.floor(coinObj.priceUsd)}`
    list.appendChild(newLi);
  });
};

const getCoinArray = async () => {
  let criptoArray = [];

  try {
    const response = await fetch('https://api.coincap.io/v2/assets');
    const data = await response.json();
    Object.values(data)[0].forEach((coin) => criptoArray.push(coin));
    addCoinsToDOM(criptoArray);
  } catch (error) {
    console.log(error);
  }
  
}

getCoinArray();
