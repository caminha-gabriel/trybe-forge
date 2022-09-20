const express = require('express');
const BooksRoute = require('../src/routes/books.routes');
const errorMiddleware = require('./middlewares/error.middleware');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(BooksRoute);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Listening to PORT ${PORT}`));