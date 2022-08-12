const express = require('express');
const bodyParser = require('body-parser');
const productsController = require('./controllers/productsController');

const app = express();
app.use(express.json());

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.route('/products')
  .get(productsController.getAll)
  .post(productsController.add);

app.route('/products/:id')
  .get(productsController.getById)
  .put(productsController.update)
  .delete(productsController.exclude);

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}!`);
});