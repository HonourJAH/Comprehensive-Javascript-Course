////////////////////////////////////////////////////////////////////////////////////////
///////////////////// LINKING JAVASCRIPT FILE TO HTML, FIRST PART /////////////////////
//////////////////////////////////////////////////////////////////////////////////////

// let js = "Javascript";

// //javascript dev tools
// if (js == "Javascript") alert("Javascript is fun");

// will be printed on the dev tools console
//console.log(48 - 8 + 21);

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////VALUES AND VARIABLES, FIRST PART //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

// Michael and 43 are values
// console.log("Michael");
// console.log(43);

// // firstName is a variable
// let firstName = "Michael";
// console.log(firstName);

// Rules/Conventions for naming variables in JS. Not exhaustive.
/*
1. The variables should be written in camel cases for variable names with two or more words together, i.e, firstName, lastName, variableName, firstNameOfMichael, etc but if the //variable name is just a word, i.e number, varible, short etc, it should be written in lower case.
*/

// let lastName = "Onojah";
// let age = 100;

/*
2. Do not use language reserve/key words as variable names. e.g; new, function, name, let, const, var, etc.

3. Variable names should not start with numbers, i.e, 3FirstName, 26MyAge, etc.

4. Don't start a variable name with a capital letter.
e.g; let FirstName = 'Michael;
*/

/*
5. Variables should be descriptive. Just reading the variable's name should be enough to predict the value it holding.
le, e.g
*/

// let myFirstJob = "Teacher"; //descriptive
// let myCurrentJob = "Programmer"; //descriptive

// let job1 = "Teacher"; //not descriptive
// let job2 = "Programmer"; //not descriptive

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////DATA TYPES, FIRST PART //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

// 7 PRIMITIVE DATA TYPES IN JAVASCRIPT
/*
1. Number: Floating point numbers. Used for decimals and integers (let age = 233;)
2. String: Sequence of characters. Used for text (let firstName = 'Michael';)
3. Boolean: Logical type that can only be true or false: Used for taking decisions (let fullAge = true).
4. Undefined: Value taken by a variable that is not yet defined('empty value')(let firstName;)
5. Null: Also means 'empty value'
6. Symbol(ES2015): Value that is unique and connot be changed(not useful for now)
7. BigInt(2020): Larger intefers than the Number type can hold 

*/

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////BASIC OPERATORS, FIRST PART //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

// Math operators
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

////////////////////////////////////
// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////STRINGS AND TEMPLATE LITERALS, FIRST PART //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

const firstName = "Michael";
const job = "Engineer";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String
multiple
lines`);
