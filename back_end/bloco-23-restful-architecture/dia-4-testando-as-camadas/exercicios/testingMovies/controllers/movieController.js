const MoviesService = require('../services/movieService');

const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const movie = await MoviesService
    .create({ title, directedBy, releaseYear });
    if (!movie) {
    return res
      .status(400)
      .send('Invalid Data');
   }

  res
    .status(201)
    .send('Movie created with success!');
};

const getById = async (req, res) => {
  const { id } = req.params;

  const { code, message, content } = await MoviesService.getById(id);

  if (message) {
    return res.status(code).json({ message });
  };

  return res.status(code).json(content);
};

module.exports = {
  create,
  getById,
};