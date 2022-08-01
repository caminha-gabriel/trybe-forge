const express = require('express');

const app = express();

app.get('/hello', handleHelloWorldRequest);

app.listen(3001, () => {
  console.log('Application hearing 3001 port');
});

function handleHelloWorldRequest(req, res) {
  res.status(200).send('<h1>Hello World</h1>');
}