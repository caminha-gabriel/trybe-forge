const connection = require('./connection');

const getAll = async () => {
  const [users] = await connection.execute('SELECT * FROM msc_exercise.users;');

  return users
};

const getById = async (id) => {
  const query = 'SELECT * FROM msc_exercise.books WHERE id=?;';

  const [user] = await connection.execute(query, [id]);

  return user;
};

const add = async (firstName, lastName, email, password) => connection.execute('INSERT INTO msc_exercise.users (title, author_id) VALUES (?, ?)', [firstName, lastName, email, password]);

module.exports = {
  getAll,
  getById,
  add,
}