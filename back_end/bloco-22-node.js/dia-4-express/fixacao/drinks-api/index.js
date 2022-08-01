const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const PORT = '3001';

const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

const drinksSortedByName = [...drinks].sort((a, b) => a.name.localeCompare(b.name));

app
	.route('/drinks')
	.get(function (_req, res) {
  res.json(drinks);
})
	.post(function (req, res) {
		const { id, name, price } = req.body;
		drinks.push({ id, name, price });
		res.status(201).json({ message: 'Drink created successfully!' });
	})

app.get('/drinks/sorted', function (_req, res) {
  res.json(drinksSortedByName);
});

app.get('/drinks/search', function (req, res) {
	const { name = '', maxPrice = 30, minPrice = 0 } = req.query;

	const requestedDrinks = drinks.filter((drink) => {
		return drink.name.toLowerCase().includes(name.toLowerCase())
		&& drink.price >= Number(minPrice)
		&& drink.price <= Number(maxPrice)
	});
	
	if (!requestedDrinks) return res.status(404).json({ message: 'Any drink found'});

	res.status(200).json(requestedDrinks);
});

app
	.route('/drinks/:id')
	.get(function (req, res) {
	const { id } = req.params;

	const requestedDrink = drinks.find((drink) => drink.id === Number(id));

	if (!requestedDrink) return res.status(404).json({ message: 'Drink not found!'});

	res.status(200).json(requestedDrink);
})
	.put(function (req, res) {
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

	app.all('*', function (req, res) {
		return res.status(404).json({ message: `Route ${req.path} do not exists!`});
	});

app.listen(PORT, () => {
  console.log('App listen to PORT %s', PORT);
});
