const Book = require('../services/Book');

const getByAuthorId = async (req, res) => {
  const { author_id } = req.query;

  const requestedBooks = (author_id)
  ? await Book.getByAuthorId(author_id)
  : await Book.getAll();

  res.status(200).json(requestedBooks);
}

const findById = async (req, res) => {
  const { id } = req.params;

  const requestedBook = await Book.findById(id);

  if (!requestedBook) return res.status(404).json({ message: 'Book not found'});

  res.status(200).json(requestedBook);
}

const create = async (req, res) => {
  const { title, author_id } = req.body;

  await Book.create(title, author_id);

  res.status(204).end();
}

module.exports = {
  getByAuthorId,
  findById,
  create,
}