const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const PORT = 3001;

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;

  res.status(200).json({ message: `Hello ${name}!` });
});

app.post ('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (age > 17) return res.status(200).json({ message: `Hello, ${name}, You're older than 17 years!`});

  return res.status(401).json({ message: `${name}, You're younger than 18 years, so you are unauthorized`});
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;

  return res.status(200).json({ message: `Your name is ${name} and you're ${age} years old`});
});

app.listen(PORT, () => {
  console.log('App listening to PORT %s', PORT);
});