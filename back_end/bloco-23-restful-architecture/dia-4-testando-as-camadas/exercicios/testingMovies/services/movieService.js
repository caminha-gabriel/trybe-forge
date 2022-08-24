const MoviesModel = require('../models/movieModel');

const validateTitle = (title) => (title && typeof title === 'string');

const validateReleaseYear = (releaseYear) => (releaseYear && typeof releaseYear === 'number');

const validateDirectedBy = (directedBy) => (directedBy && typeof directedBy === 'string');

const isValid = (title, directedBy, releaseYear) => {
  const isValidTitle = validateTitle(title);
  const isValidReleaseYear = validateReleaseYear(releaseYear);
  const isValidDirectedBy = validateDirectedBy(directedBy);

  if (!isValidTitle || !isValidReleaseYear || !isValidDirectedBy) return false;

  return true;
};

const create = async ({ title, directedBy, releaseYear }) => {
  const isMovieValid = isValid(title, directedBy, releaseYear);

  if (!isMovieValid) return false;

  const { id } = await MoviesModel
    .create({ title, directedBy, releaseYear });

  return {
    id,
  };
};

const getById = async (id) => {
  const response = await MoviesModel.getById(id);

  if (!response) {
    return {
      code: 404,
      message: 'Movie not found'
    };
  };

  const {
    title,
    directed_by: directedBy,
    release_year: releaseYear
  } = response;

  return {
    code: 200,
    content : {
      id,
      title,
      directedBy,
      releaseYear,
    },
  };
};

module.exports = {
  create,
  getById,
};