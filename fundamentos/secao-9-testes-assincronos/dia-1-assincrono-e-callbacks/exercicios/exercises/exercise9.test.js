// 9 - A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. Crie um novo arquivo .test.js ou .spec.js e copie o código abaixo. Complete os testes para a função getPokemonDetails de acordo com as especificações.

// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exercise8.js");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const notAPokemon = (element) => element.name === 'Leafeon';
    const errorResult = new Error('Não temos esse pokémon para você :(');

    function testError(newError, result) {
      try {
        expect(newError).toEqual(errorResult);
        done();
      } catch (error) {
        done(error);
      }
    };

    getPokemonDetails(notAPokemon, testError);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const pokemonToFind = (element) => element.name === 'Bulbasaur';
    const rightMessage = `Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf`;

    function testRightPokemon (newError, result) {
      try {
        expect(result).toBe(rightMessage);
        done();
      } catch (error) {
        done(error);
      }
    }

    getPokemonDetails(pokemonToFind, testRightPokemon);
  });
});