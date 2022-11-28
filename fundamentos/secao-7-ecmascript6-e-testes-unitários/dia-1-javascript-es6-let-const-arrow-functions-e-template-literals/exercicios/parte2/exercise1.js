const returnFatorial = number => {
  let fatorial = number;
  if (number === 0) fatorial = 1;
  for (let i = number - 1; i > 1; i--) {
    fatorial *= i;
  }
  return fatorial;
}

console.log(returnFatorial(3));

// Added using:
//  http://devfuria.com.br/logica-de-programacao/recursividade-fatorial/
// const returnFatorial = number => number === 0 ? 1 : number * returnFatorial(number - 1);

// console.log(returnFatorial(5));