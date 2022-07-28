const fs = require ('fs').promises;

async function writeAll(stringsArr) {
  try {
    await Promise.all(stringsArr.map((string, index) => {
        return fs.writeFile(`file${index + 1}.txt`, string);
      }));
    } catch (err) {
    console.error(err);
  };
};

// writeAll(['Finally', 'using', 'Promise.all', '!!!']);

async function readAll(quantityOfFiles) {
  try {
    const filesToRead = [];
    for (let index = 1; index <= quantityOfFiles; index += 1) {
      filesToRead.push(`file${index}.txt`);
    }
    const filesContent = await Promise.all(filesToRead.map((file) => {
      return fs.readFile(file, 'utf8');
    }));
    await fs.writeFile('fileAll.txt', filesContent.join(' '));
  } catch (err) {
    console.error(err);
  };
};

readAll(4);