const express = require('express');
const bodyParser = require('body-parser');
const Author = require('./controllers/Author');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(bodyParser.json());
app.use(errorMiddleware);

app.get('/authors', Author.getAll);

app.get('/authors/:id', Author.findById);

app.post('/authors', Author.createAuthor);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});