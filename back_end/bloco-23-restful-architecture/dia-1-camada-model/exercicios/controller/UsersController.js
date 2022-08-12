const UsersModel = require('../model/UsersModel');

const HTTP_STATUS_INTERNAL_SERVER_ERROR = 500;
const HTTP_STATUS_OK = 200;
const HTTP_STATUS_CREATED = 201;

const getAll = async (_req, res) => {
  try {
    const users = await UsersModel.getAll();

    return res.status(HTTP_STATUS_OK).json(users);
  } catch (error) {
    console.error(error);

    return res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).exit(1);
  }
};

const getById = async (req, res) => {
  const { id } = req.params;

  try {
    const { user, code, message } = await UsersModel.getById(id);

    if (message) return res.status(code).json(message);

    return res.status(code).json(user);
  } catch (error) {
    console.error(error);

    return res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).exit(1);
  }
};

const add = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const addedUser = await UsersModel.add(firstName, lastName, email, password);
    
    return res.status(HTTP_STATUS_CREATED).json(addedUser);
  } catch (error) {
    console.error(error);

    return res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).exit(1);
  }
};

module.exports = {
  getAll,
  getById,
  add,
}