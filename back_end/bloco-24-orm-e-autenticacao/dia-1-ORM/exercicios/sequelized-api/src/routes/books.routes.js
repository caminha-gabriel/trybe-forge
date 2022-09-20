const { Router } = require("express");
const BookController = require('../controllers/books.controller');

const route = Router();

route.get('/books', BookController.getAll);
route.get('/books/:id', BookController.getById);
route.post('/books', BookController.create);
route.put('/books/:id', BookController.update);
route.delete('/books/:id', BookController.remove);

module.exports = route;