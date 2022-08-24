const express = require('express');
const bodyParser = require('body-parser');

const MovieController = require('./controllers/movieController');

const app = express();

app.use(bodyParser.json());

app.post('/movies', MovieController.create);

app.get('/movies/:id', MovieController.getById);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
});