const marvel_heroes = ["Thor", "Hulk", "Hawkeye", "Vision"];
const dc_heroes = ["Super-man", "Batman", "Green-Latern", "Flash"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);

// const allHeroes = dc_heroes.concat(marvel_heroes);
// console.log(allHeroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes];    // "..." stands for spread operator and this is an easy way to concat 2 arrays
console.log(all_new_heroes);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = anotherArray.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Manas"));
console.log(Array.from("Manas"))
console.log(Array.from({name: "Manas"}));   //Important for interviews

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));


