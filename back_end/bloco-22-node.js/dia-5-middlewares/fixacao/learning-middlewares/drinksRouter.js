const express = require('express');
const router = express.Router();

const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

function validateName(req,res, next) {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Invalid name data!'});

  next();
};

function validatePrice(req, res, next) {
  const { price } = req.body;

  if(!price || typeof(price) !== 'number' || price < 0) return res.status(400).json({ message: 'Invalid price data'});

  next();
};

const drinksSortedByName = [...drinks].sort((a, b) => a.name.localeCompare(b.name));

router
	.route('/')
	.get(function (_req, res) {
  res.json(drinks);
})
	.post(validateName, validatePrice, function (req, res) {
		const { id, name, price } = req.body;
		drinks.push({ id, name, price });
		res.status(201).json({ message: 'Drink created successfully!' });
	})


router.get('/sorted', function (_req, res) {
  res.json(drinksSortedByName);
});

router.get('/search', function (req, res) {
	const { name = '', maxPrice = 30, minPrice = 0 } = req.query;

	const requestedDrinks = drinks.filter((drink) => {
		return drink.name.toLowerCase().includes(name.toLowerCase())
		&& drink.price >= Number(minPrice)
		&& drink.price <= Number(maxPrice)
	});
	
	if (!requestedDrinks) return res.status(404).json({ message: 'Any drink found'});

	res.status(200).json(requestedDrinks);
});

router
	.route('/:id')
	.get(function (req, res) {
	const { id } = req.params;

	const requestedDrink = drinks.find((drink) => drink.id === Number(id));

	if (!requestedDrink) return res.status(404).json({ message: 'Drink not found!'});

	res.status(200).json(requestedDrink);
})
	.put(validateName, validatePrice, function (req, res) {
		const { id } = req.params;
		const { name, price } = req.body;

		const drinkIndex = drinks.findIndex((drink) => drink.id = Number(id));

		if (drinkIndex === -1) return res.status(404).json({ message: 'Drink not found!'});

		drinks[drinkIndex] = { ...drinks[drinkIndex], name, price };

		res.status(204).end();
	})
	.delete(function (req, res) {
		const { id } = req.params;

		const drinkIndex = drinks.findIndex((drink) => drink.id = Number(id));

		if (drinkIndex === -1) return res.status(404).json({ message: 'Drink not found!'});

		drinks.splice(drinkIndex, 1);

		res.status(204).end();
	});

  module.exports = router;