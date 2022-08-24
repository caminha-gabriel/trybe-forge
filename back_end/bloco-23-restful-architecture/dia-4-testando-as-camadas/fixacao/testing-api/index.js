const express = require('express');
const bodyParser = require('body-parser');

const MovieController = require('./controllers/movieController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/movies', MovieController.create);


app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
});