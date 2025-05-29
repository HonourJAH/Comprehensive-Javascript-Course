"use strict";

////////////////////////////////////////
// Default parameters
////////////////////////////////////

const bookings = [];

const createBooking = function (
  flightNum = "LH112",
  numPassengers = 4,
  price = 134
) {
  // ES6 way of setting default values
  // flightNum = flightNum || "LH112";
  // numPassengers = numPassengers || 4;
  // price = 135;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

// createBooking();
// createBooking("LH223");
// createBooking("LH123", 89, 987);

////////////////////////////////////////////////////////////////
// How Passing Arguments Works: Value vs. Reference
///////////////////////////////////////////////////////////////

const flight = "LH234";
const mike = {
  name: "Michael Mike",
  passport: 23456789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH889";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 23456789) {
    alert("Checked in");
  } else {
    alert("Wrong passport!");
  }
};

// checkIn(flight, mike);
// console.log(flight);
// console.log(mike);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};

// newPassport(mike);
// checkIn(flight, mike);

//////////////////////////////////////////////
// Functions Accepting Callback Functions
/////////////////////////////////////////////

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higer-order function
const transformer = function (str, fn) {
  console.log(`Origin string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

// transformer("Javascript is the best!", upperFirstWord);
// transformer("Javascript is the best!", oneWord);

////////////////////////////////////////////
// Functions Returning Functions
/////////////////////////////////////////////

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetHey = greet("Hey");
// greetHey("Mike");

// greet("Hello")("Mike");

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

// greetArr("Hi")("Michael");

///////////////////////////////////////
// The call and apply Methods
/////////////////////////////////////

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// lufthansa.book(239, "Mike");
// lufthansa.book(635, "Michael");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, "Sarah Williams");
// console.log(eurowings);

book.call(lufthansa, 239, "Mary Cooper");
// console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Mary Cooper");

// Apply method
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

///////////////////////////////////////
// The bind Method
////////////////////////////////////////

// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Steven Williams");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Jonas Schmedtmann");
bookEW23("Martha Cooper");

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
