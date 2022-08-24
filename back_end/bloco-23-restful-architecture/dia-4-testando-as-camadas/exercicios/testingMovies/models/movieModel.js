const connection = require('./connection');

const create = async ({ title, directedBy, releaseYear }) => {
  const [result] = await connection
    .execute(
      'INSERT INTO model_example.movies (title, directed_by, release_year) VALUES (?, ?, ?)',
      [title, directedBy, releaseYear],
    );

  return {
    id: result.insertId,
  };
};

const getById = async (id) => {
  const query = 'SELECT * FROM model_example.movies WHERE id = ?';
  const [result] = await connection.execute(query, [id]);

  if (!result) return null;
  return result;
};

module.exports = {
  create,
  getById,
};