const connection = require('./connection');

const serialize = (bookData) => ({
  id: bookData.id,
  title: bookData.title,
  authorId: bookData.author_id,
});

const getAll = async () => {
  const [books] = await connection.execute('SELECT id, title, author_id FROM model_example.books;');

  return books.map(serialize);
};

const getByAuthorId = async (authorId) => {
  const query = 'SELECT * FROM model_example.books WHERE author_id=?;';

  const [books] = await connection.execute(query, [authorId]);

  return books.map(serialize);
};

const findById = async (id) => {
  const query = 'SELECT * FROM model_example.books WHERE id=?'
  const [bookData] = await connection.execute(query, [id]);

  if (bookData.length === 0) return null;

  return serialize(bookData[0]);
};

const create = async (title, authorId) => connection.execute('INSERT INTO model_example.books (title, author_id) VALUES (?, ?)', [title, authorId]);

module.exports = {
  getAll,
  getByAuthorId,
  findById,
  create,
}