const express = require('express');
const bodyParser = require('body-parser');
const logRequestMiddleware = require('./logRequestMiddleware');
const PORT = '3001';

const app = express();
const drinksRouter = require('./drinksRouter');

app.use(bodyParser.json());
app.use('./drinks', drinksRouter);
app.use(logRequestMiddleware);

app.all('*', function (req, res) {
  return res.status(404).json({ message: `Route ${req.path} do not exists!`});
});

app.listen(PORT, () => {
  console.log('App listen to PORT %s', PORT);
});