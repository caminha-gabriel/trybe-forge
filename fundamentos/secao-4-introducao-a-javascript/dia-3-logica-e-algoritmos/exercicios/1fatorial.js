// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let number = 4;
let fatorial = 1;

for (let index = number; index > 0; index -= 1) {
        fatorial = fatorial*index    
}

console.log(fatorial);