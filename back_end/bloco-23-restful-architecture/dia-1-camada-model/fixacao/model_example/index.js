const express = require('express');
const Author = require('./models/Author');
const {
  getByAuthorId,
  findById,
  create,
} = require('./controllers/BookControllers');
const {
  validateBookId,
  validateBookCreation,
} = require('./middlewares/BookMiddlewares');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Author not found'});

  res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.status(400).json({ message: 'Invalid data'});
  }

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Author created successfully'});
});

app.get('/books', getByAuthorId);

app.get('/books/:id', validateBookId, findById);

app.post('/books', validateBookCreation, create);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});