const fs = require('fs').promises;

fs.writeFile('./my-file.txt', 'That\'s actually a new text, you should\'ve not seen this, We\'re sorry')
  .then(() => {
    console.log('File written with success');
  })
  .catch((err) => {
    console.error(`Error writing the file: ${err.message}`);
  });