const fs = require('fs').promises;
const readline = require('readline-sync');

const fileOptions = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'fileAll.txt'];
const chosenFileIndex = readline.keyInSelect(fileOptions);

async function changeFileContent() {
  try {
    const content = await fs.readFile(fileOptions[chosenFileIndex], 'utf8');
    console.log(`${fileOptions[chosenFileIndex]} content:\n ${content}`);

    const wordToChange = readline.question('Choose a word to change on the file: ');
    const wordToWrite = readline.question('Choose a word to write in place: ');

    const newContent = content.replace(new RegExp(wordToChange, 'g'), wordToWrite);

    const newFileName = readline.question('Choose a file name to write your new content: ');

    await fs.writeFile(`${newFileName}.txt`, newContent);
    console.log(`Your new file "${newFileName}" was created`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

changeFileContent();