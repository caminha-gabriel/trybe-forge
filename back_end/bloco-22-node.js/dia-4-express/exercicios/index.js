const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises');

const app = express();
app.use(bodyParser.json());
const PORT = 3001;
const simpsonsFile = './simpsons.json';

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.get('/simpsons', async (_req, res) => {
  const content = await fs.readFile(simpsonsFile, 'utf8');
  const parsedContent = JSON.parse(content);

  if (!parsedContent || parsedContent === []) return res.status(500).json({ message: 'Any Simpson found' });

  res.status(200).json(JSON.parse(content));
});

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;
  const content = await fs.readFile(simpsonsFile, 'utf8');
  const parsedContent = JSON.parse(content);
  const requestedSimpson = parsedContent.find((simpson) => simpson.id == id);

  if (!requestedSimpson || requestedSimpson === '') return res.status(404).json({ message: 'Simpson not found'});

  res.status(200).json(requestedSimpson);
});

app.post('/simpsons', async (req, res) => {
  const { id, name } = req.body;
  const newSimpson = { id: id.toString(), name };
  const content = await fs.readFile(simpsonsFile, 'utf8');
  const parsedContent = JSON.parse(content);
  const newContent = [...parsedContent, newSimpson];
  
  if ((!id || id === '') || (!name || name === '')) {
    return res.status(400).json({ message: 'Invalid data'});
  }

  if (parsedContent.some((simpson) => simpson.id === id)) {
    return res.status(409).json({ message: 'Id already exists' });
  }
  
  await fs.writeFile(simpsonsFile, JSON.stringify(newContent));

  res.status(204).end();
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