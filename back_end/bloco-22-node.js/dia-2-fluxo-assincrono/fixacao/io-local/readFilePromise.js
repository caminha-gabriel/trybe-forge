const fs = require('fs').promises;

const fileName = 'my-file.txt';

fs.readFile(fileName, 'utf8')
  .then((data) => {
    console.log(`File content: ${data}`);
  })
  .catch((err) => {
    console.error(`It is not possible to read file ${fileName}\n Error: ${err}`);
    process.exit(1);
  })