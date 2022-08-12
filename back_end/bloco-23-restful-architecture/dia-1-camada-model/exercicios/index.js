const express = require('express');
const UsersController = require('./controller/UsersController');
const validateUser = require('./middlewares/validateUser');

const PORT = 3000;

const app = express(express.json());

app.get('/user', UsersController.getAll);

app.get('/user/:id', UsersController.getById);

app.post('/user', validateUser, UsersController.add);

app.listen(PORT, console.log(`App listening to PORT ${PORT}`));