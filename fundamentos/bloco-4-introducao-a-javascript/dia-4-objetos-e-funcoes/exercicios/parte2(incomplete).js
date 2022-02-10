// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

// function isPalindrome(string) {
//     let arrayWord = string.split("")
//     let reversedString = (arrayWord.reverse()).join("");
//         if (string === reversedString) {
//         return  true;
//     } else {
//         return false;
//     }
// }

// console.log(isPalindrome('arara'));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// function higherValue(numbersArray) {
//     let higherNumber = numbersArray[0];
//     for (let i = 0; i < numbersArray.length; i += 1) {
//         if (numbersArray[i] > higherNumber) {
//             higherNumber = numbersArray[i];
//         }
//     }
//     return numbersArray.indexOf(higherNumber, 0);
// }

// console.log(higherValue([2, 3, 6, 7, 10, 1]))

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// function lowerValue(numbersArray) {
//     let lowerNumber = numbersArray[numbersArray.length-1];
//     for (let i = numbersArray.length-1; i >= 0; i -= 1) {
//         if (numbersArray[i] < lowerNumber) {
//             lowerNumber = numbersArray[i];
//         }
//     }
//     return numbersArray.indexOf(lowerNumber);
// }

// console.log(lowerValue([2, 4, 6, -3, 10, 0, 7]));