const fs = require('fs').promises;

const readSimpsonsFile = async (filePath) => {
  const response = await fs.readFile(filePath, 'utf8');
  const simpsonsArray = await JSON.parse(response);
  return simpsonsArray;
};

async function readSimpsons() {
  try {
    const simpsonsArray = await readSimpsonsFile('./simpsons.json');
    simpsonsArray.forEach((simpson) => {
      console.log(`${simpson.id} - ${simpson.name}`);
    });
  } catch (err) {
    console.error(err.message);
  };
};

// readSimpsons();

async function findSimpson(id) {
  try {
    const simpsonsArray = await readSimpsonsFile('./simpsons.json');
    const foundSimpson = simpsonsArray.find((simpson) => simpson.id === id.toString());

    if(id) {
      console.log(`Your Simpson is ${foundSimpson.name}, who carries the id: ${foundSimpson.id}`);
      return;
    }
    console.log('Id not found');
  } catch (err) {
    console.error(err.message);
  }
};

// findSimpson(0);

async function remove10And6Simpson() {
  try {
    const simpsonsArray = await readSimpsonsFile('./simpsons.json');
    const newSimpsonList = simpsonsArray.filter((simpson) => {
      return simpson.id !== '10' && simpson.id !== '6';
    });
    console.log(newSimpsonList);

    fs.writeFile('./simpsonsModified.json', JSON.stringify(newSimpsonList));
  } catch (err) {
    console.error(err.message);
  }
}

// remove10And6Simpson();

async function create1To4SimpsonList() {
  try {
    const simpsonsArray = await readSimpsonsFile('./simpsons.json');
    const newSimpsonList = simpsonsArray.filter((simpson) => simpson.id >= 1 && simpson.id <= 4);
    fs.writeFile('./simpsonsModified2.json', JSON.stringify(newSimpsonList));
  } catch (err) {
    console.error(err.message);
  }
}

// create1To4SimpsonList();

async function addNelsonMuntz() {
  try {
    const simpsonsArray = await readSimpsonsFile('./simpsonsModified2.json');
    simpsonsArray.push({id: 5, name: 'Nelson Muntz'});
    console.log(simpsonsArray);
    fs.writeFile('./simpsonsModified3.json', JSON.stringify(simpsonsArray));
  } catch (err) {
    console.error(err.message);
  }
};

// addNelsonMuntz();

async function switchNelsonForMaggie() {
  try {
    const simpsonsArray = await readSimpsonsFile('./simpsonsModified3.json');
    simpsonsArray[4].name = 'Maggie Nelson'
    console.log(simpsonsArray);
    fs.writeFile('./simpsonsModified4.json', JSON.stringify(simpsonsArray));
  } catch (err) {
    console.error(err.message);
  }
};

// switchNelsonForMaggie();