// SOLUTIONS TO THE ASSIGNMENTS
///////////////////////////////
//Values and Variables
////////////////////////////////

/*
let country = "Nigeria";
let continent = "West Africal";
let population = 200;

console.log(country);
console.log(continent);
console.log(population);
*/

////////////////////////////
//Data Types
//////////////////////////////
/*
let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
*/

////////////////////////////////
// let, const and var
////////////////////////////////

/*language = 'Yoruba';
const country = 'Nigeria';
const continent = 'West Africa';
const isIsland = false;
isIsland = true;
*/

////////////////////////
// Basic Operators
/////////////////////////
/*
console.log(population / 2);

population++;

console.log(population);
console.log(population > 6);
console.log(population < 33);

const description1 =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;

console.log(description1);
*/

////////////////////////////////////////////////
// Strings and Template Literals
///////////////////////////////////////////////

/*
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
*/

/////////////////////////////////////////
//Taking Decisions: if / else Statements
/////////////////////////////////////////////
/*
if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million
    below average`
  );
}
*/

//////////////////////////////////////////////////
//Type Conversion and Coercion
/////////////////////////////////////////////////
/* 
console.log('9' - '5'); // -> ?
console.log('19' - '13' + '17'); // -> ?
console.log('19' - '13' + 17); // -> ?
console.log('123' < 57); // -> ?
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> ?
*/

//////////////////////////////////////
//Equality Operators: == vs. ===
//////////////////////////////////////////
/*
const numNeighbours = prompt(
  'How many neighbour countries does your country have?'
);

// LATER : This helps us prevent bugs
const numNeighbours = Number(
  prompt('How many neighbour countries does your country have?')
);

if (numNeighbours === 1) {
  console.log('Only 1 border!');
} else if (numNeighbours > 1) {
  console.log('More than 1 border');
} else {
  console.log('No borders');
}
*/

////////////////////////////////////////////////////
//Logical Operators
//////////////////////////////////////////////////
/*
language === 'english' && population < 50 && !isIsland;
if (language === 'english' && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}
*/

//////////////////////////////////////////////////
//The switch Statement
//////////////////////////////////////////////
/*
switch (language) {
  case 'chinese':
  case 'mandarin':
    console.log('MOST number of native speakers!');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('3rd place');
    break;
  case 'hindi':
    console.log('Number 4');
    break;
  case 'arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too :D');
}
*/

////////////////////////////////////////////
//The Conditional (Ternary) Operator
/////////////////////////////////////////
/*
console.log(
  `${country}'s population is ${population > 33 ? 'above' : 'below'} average`
);
*/
