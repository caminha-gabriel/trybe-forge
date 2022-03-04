// const coolestTvShow = {
//   name: "BoJack Horseman",
//   genre: "adult animation",
//   createdBy: "Raphael Bob-Waksberg",
//   favoriteCharacter: "Princess Carolyn",
//   quote: "Princess Carolyn always lands on her feet.",
//   seasons: 6,
// };

// // for (const property in coolestTvShow) {
// //   console.log(property);
// // }

// console.log(Object.keys(coolestTvShow));

// // [ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ]

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const showSkills = student => {
  for (let key in student) {
    console.log(`${key}, Nível: ${student[key]}`);
    }
  }

showSkills(student2)