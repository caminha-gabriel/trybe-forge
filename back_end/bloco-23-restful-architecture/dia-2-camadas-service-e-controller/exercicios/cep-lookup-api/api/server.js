const express = require('express');
const bodyParser = require('body-parser');
const pingController = require('../controllers/pingController');
const cepController = require('../controllers/cepController');

const PORT = 3000;

const app = express();
app.use(bodyParser.json());

app.get('/ping', pingController.pong);

app.get('/cep/:cep', cepController.getByCep);

app.post ('/cep', cepController.addCep);

app.listen(PORT, console.log(`App listening to PORT ${PORT}`));