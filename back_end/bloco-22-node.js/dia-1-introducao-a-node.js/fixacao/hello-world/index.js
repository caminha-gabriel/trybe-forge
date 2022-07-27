const readline = require('readline-sync');

const name = readline.question('Hello, what is your name? ');
const age = readline.questionInt('And what about your age? ')
console.log(`Hello ${name}, you, a ${age} years old, are welcome in my world!`);