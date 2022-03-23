// 7 - Escreva um teste que verifique a chamada da callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const { expect } = require("@jest/globals");


const uppercase = (str, callback) => {
   setTimeout(() => {
    callback(str.toUpperCase());
  }, 2000);
};

test('Tests callback uppercase function', (done) => {
  uppercase('carls', (result) => {
    try {
    expect(result).toBe('CARLS');
    done();
    }catch (error) {
      done(error);
    }
  })
})