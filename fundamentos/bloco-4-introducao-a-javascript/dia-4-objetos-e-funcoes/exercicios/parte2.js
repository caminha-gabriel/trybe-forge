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

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// function biggestName(namesArray) {
//     let theOne = namesArray[0];
//     for (let i = 0; i < namesArray.length; i += 1) {
//         if (namesArray[i].length > theOne.length) {
//             theOne = namesArray[i];
//         }
//     }
//     console.log(theOne);
//     return theOne;
// }

// biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// function whichRepeatsMore(arrayNumbers) {
//     let counter = 0;
//     let higestCounter = 0;
//     let highestIndex = 0;

//     for (let i = 0; i < arrayNumbers.length; i += 1) {
//         for (let i2 = 0; i2 < arrayNumbers.length; i2 += 1) {
//             if (arrayNumbers[i2] === arrayNumbers[i]) {
//                 counter += 1;
//             }
//             if (counter > higestCounter) {
//                 highestCounter = counter;
//                 highestIndex = i;
//             }
//         }
//         counter = 0;
//     }
//     console.log(highestIndex);
// }
// whichRepeatsMore([2, 3, 2, 5, 8, 2, 3, 8, 8,])

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

// function sumAllPrevious(naturalNumber) {
//     let sum = 0;
//     for (let i = 1; i <= naturalNumber; i += 1) {
//         sum = sum + i
//     }
//     console.log(sum);
//     return sum;
// }

// sumAllPrevious(14);

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

// function verifyIfIncludes(string, stringEnding) {
//   let arrayString = string.split("").reverse();
//   let arrayStringEnding = stringEnding.split("").reverse();
//   let control = true;

//   for (let i = 0; i < stringEnding.length; i += 1) {
//     if (arrayString[i] !== arrayStringEnding[i]) {
//       control = false;
//     }
//   }
//   return control;
// }

// verifyIfIncludes("trybe", "be");
// console.log(verifyIfIncludes("trybe", "be"));

