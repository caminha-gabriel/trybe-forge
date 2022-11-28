const addCoinsToDOM = (coinsArray) => {
  const list = document.getElementById('criptoInfo');
  const topTenCoins = coinsArray.filter((coin) => coin.rank <= 10);

  topTenCoins.forEach((coinObj) => {
    const coinText = `${coinObj.name} (${coinObj.symbol}): $${Math.floor(coinObj.priceUsd)}`;
    let coinLi = document.createElement('li');

    coinLi.innerHTML = coinText;
    list.appendChild(coinLi);
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
