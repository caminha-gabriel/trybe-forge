const ProductsModel = require('../models/productsModel');

const HTTP_STATUS_OK = 200;
const HTTP_STATUS_CREATED = 201;
const HTTP_STATUS_NO_CONTENT = 204;

// '/products'
const getAll = async (_req, res) => {
  const products = await ProductsModel.getAll();

  res.status(HTTP_STATUS_OK).json(products);
};

// '/products'
const add = async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductsModel.add(name, brand);

  res.status(HTTP_STATUS_CREATED).json(newProduct);
};

// '/products/:id'
const getById = async (req, res) => {
  const product = await ProductsModel.getById(req.params.id);

  res.status(HTTP_STATUS_OK).json(product);
};


// '/products/:id'
const update = async (req, res) => {
  const { name, brand } = req.body;
  
  const updatedProduct = await ProductsModel.update(req.params.id, name, brand);
  
  res.status(HTTP_STATUS_OK).json(updatedProduct);
};

// '/products/:id'
const exclude = async (req, res) => {
  const product = await ProductsModel.exclude(req.params.id);
  
  res.status(HTTP_STATUS_NO_CONTENT).json(product);
};

module.exports = {
  getAll,
  add,
  getById,
  update,
  exclude,
};