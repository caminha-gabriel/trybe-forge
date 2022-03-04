// const coolestTvShow = {
//   name: "BoJack Horseman",
//   genre: "adult animation",
//   createdBy: "Raphael Bob-Waksberg",
//   favoriteCharacter: "Princess Carolyn",
//   quote: "Princess Carolyn always lands on her feet.",
//   seasons: 6,
// };

// console.log(Object.entries(coolestTvShow));

// // [
// //   [ 'name', 'BoJack Horseman' ],
// //   [ 'genre', 'adult animation' ],
// //   [ 'createdBy', 'Raphael Bob-Waksberg' ],
// //   [ 'favoriteCharacter', 'Princess Carolyn' ],
// //   [ 'quote', 'Princess Carolyn always lands on her feet.' ],
// //   [ 'seasons', 6 ]
// // ]

// const newArray = Object.entries(coolestTvShow);
// console.log(newArray[0][0]);
// console.log(newArray[3][1]);

const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

for(key in pairKeyValue) {
  console.log('--------');
  console.log('País:', pairKeyValue[key][0]);
  console.log('Capital:', pairKeyValue[key][1]);
};