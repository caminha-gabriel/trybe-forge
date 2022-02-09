// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra 
// "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras 
// para verificar se seu algoritmo está funcionando corretamente.


let word = 'Aspargo';
let arrayWord = word.split('');
let invertedWord = [];

for (let index = arrayWord.length-1; index >= 0; index -= 1) {
    invertedWord.push (arrayWord[index])

    
}

console.log(invertedWord);