// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function isPalindrome(string) {
    arrayWord = string.split("")
    reversedWord = arrayWord.reverse()

    if (arrayWord !== reversedWord) {
        return  false;
    } else {
        return true;
    }
}

console.log(isPalindrome(''));
