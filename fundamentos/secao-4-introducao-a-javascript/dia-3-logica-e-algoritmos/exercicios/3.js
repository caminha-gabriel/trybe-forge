// 3- Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];

// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. 
// Considere o número de caracteres de cada palavra.

let quantidadeAnterior = 0;
let maiorPalavra = '';
let menorPalavra = '';
let palavraAtual ='';

for (let index = 0; index < array.length; index += 1) {
    palavraAtual = array[index];
    if (quantidadeAnterior < array[index].length) {
         maiorPalavra = array[index];
     } 
      quantidadeAnterior = array[index].length;

    }

console.log(maiorPalavra);
