const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addToObj (obj, key, value) {
  obj[key] = value;
  console.log(obj);
}

function showObjKeys (obj) {
  return Object.keys(obj);
}

function showObjLength (obj) {
  return Object.keys(obj).length;
}

function showObjValues (obj) {
  return Object.values(obj);
}

let allLessons = {};
function createAllLessonsObj() {
  Object.assign(allLessons, {lesson1, lesson2, lesson3});
}

createAllLessonsObj();

function findStudents() {
  let students = 0;
  Object.values(allLessons).forEach(lesson => {
    students += (lesson.numeroEstudantes);
  });
  
  return students;
}

function getValueIndex(obj, index) {
  return Object.values(obj)[index];
}

function checkEntry(obj, key, value) {
  let checker = false;
  Object.entries(obj).forEach((thing) => {
    if (thing[0] === key && thing[1] === value) checker = true;
  });

  return checker;
}
