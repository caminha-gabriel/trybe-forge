const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

let productsWPrices = prices.map((price, ind) => {
  let product = products[ind];
  return { [product]: price };
});

console.log(productsWPrices);