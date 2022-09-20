const { StatusCodes } = require('http-status-codes');
const BookService = require('../services/books.service');

const getAll = async (_req, res) => {
  const books = await BookService.getAll()

  return res.status(StatusCodes.OK).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const book = await BookService.getById(id);

  if (!book) {
    return res.status(StatusCodes.NOT_FOUND).json({ message: "Book not found"});
  }

  return res.status(StatusCodes.OK).json(book);
}

const create = async (req, res) => {
  const book = req.body;

  const bookCreated = await BookService.create(book);

  return res.status(StatusCodes.CREATED).json(bookCreated);
}

const update = async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  const book = await BookService.getById(id);
  if (!book) {
    return res.status(StatusCodes.NOT_FOUND).json({ message: 'Book not found' });
  }

  await BookService.update(changes, id);

  return res.status(StatusCodes.OK).json({ message: 'Book updated' });
};

const remove = async (req, res) => {
  const { id } = req.params;

  const book = await BookService.getById(id);
  if (!book) {
    return res.status(StatusCodes.NOT_FOUND).json({ message: 'Book not found' });
  }

  await BookService.remove(id);
  return res.status(StatusCodes.OK).json({ message: 'Book deleted' });
}
module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
}