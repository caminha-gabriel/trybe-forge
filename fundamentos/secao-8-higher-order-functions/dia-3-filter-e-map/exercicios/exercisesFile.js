const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
// Dica: Use a função map

const exercise1Array = books.map(book => `${book.name} - ${book.genre} - ${book.author.name}`);

// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
// Dica: use as funções map , sort
function exercise2Compare(a, b) {
  if(a.ageOnRelease < b.ageOnRelease) return -1;
  if(a.ageOnRelease > b.ageOnRelease) return 1;
  return 0;
}

function exercise2(booksArray) {
  const exercise2Array = booksArray.map(book => {
    const { author } = book;
    return {
      author: author.name,
      ageOnRelease: book.releaseYear - author.birthYear,
    }
  })
  return exercise2Array.sort(exercise2Compare);
}

exercise2(books);

// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
// Dica: use a função filter ;

const exercise3Array = books.filter(book => {
  if (book.genre === 'Ficção Científica' || book.genre === 'Fantasia') return book;
})

// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
// Dica: use as funções filter e sort

function exercise4Compare(a, b) {
  if(a.releaseYear < b.releaseYear) return -1;
  if(a.releaseYear > b.releaseYear) return 1;
  return 0;
}

function exercise4(booksArray) {
  const sixtyPlusArray = booksArray.filter(book => 2022 - book.releaseYear > 60);
  return sixtyPlusArray.sort(exercise4Compare);
}

exercise4(books);

// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

function exercise5(booksArray) {
  const named = booksArray.filter(book => {
    if (book.genre === 'Ficção Científica' || book.genre === 'Fantasia') return book.author.name
  });
  return named.map(obj => obj.author.name).sort();
};

exercise5(books);

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

function exercise6(booksArray) {
  const array = booksArray.filter(book => 2022 - book.releaseYear > 60);
  return array.map(obj => obj.name);
}

exercise6(books);

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.

function exercise7(booksArray) {
  const foundName = booksArray.find(book => book.author.name.split(' ').filter(word => word.endsWith('.')).length === 3).name;

  return foundName;
}

exercise7(books);