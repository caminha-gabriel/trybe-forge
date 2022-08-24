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

module.exports = {
  create,
};