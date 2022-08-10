const Book = require('../models/Book');

const getAll = async () => {
  return await Book.getAll();
};

const findById = async(id) => {
  return await Book.findById(id);
};

const create = async (title, authorId) => {
  const book =  await Book.create(title, authorId);

  return book;
};

module.exports = {
  getAll,
  findById,
  create,
}