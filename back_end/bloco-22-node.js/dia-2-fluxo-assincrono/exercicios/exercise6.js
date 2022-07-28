const fs = require('fs').promises;
const readline = require('readline-sync');

const fileOptions = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'fileAll.txt'];
const chosenFileIndex = readline.keyInSelect(fileOptions);

async function readChosenFile() {
  try {
    const content = await fs.readFile(fileOptions[chosenFileIndex], 'utf8');
    console.log(`${fileOptions[chosenFileIndex]} content:\n ${content}`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

readChosenFile();