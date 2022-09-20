const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();

  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);

  return book;
}

const create = async (book) => {
  const bookCreated = await Book.create(book);

  return bookCreated;
}

const update = async (changes, id) => {
  await Book.update(changes, { where: { id }});
}

const remove = async (id) => {
  await Book.destroy({ where: { id }});
}
module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
}