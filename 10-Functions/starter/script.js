'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking(`LH123`);
// createBooking(`LH123`, 2, 800);
// createBooking(`LH123`, 2);
// createBooking(`LH123`, undefined, 1000);

// const flight = `LH234`;
// const leo = {
//   name: `Leonardo Scarlato`,
//   passport: 230872340892341,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = `LH999`;
//   passenger.name = `Mr. ` + passenger.name;

//   if (passenger.passport === 230872340892341) {
//     alert(`Check In`);
//   } else {
//     alert(`Wrong Passport`);
//   }
// };

// // checkIn(flight, leo);
// // console.log(flight);
// // console.log(leo);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(leo);
// checkIn(flight, leo);
// console.log(leo);

// const oneWord = function (str) {
//   return str.replace(/ /g, ``).toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(` `);
//   return [first.toUpperCase(), ...others].join(` `);
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer(`JavaScript is the best!`, upperFirstWord);
// transformer(`JavaScript is the best!`, oneWord);

// const high5 = function () {
//   console.log(`🙌`);
// };

// document.body.addEventListener(`click`, high5);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet(`Hey`);
// greeterHey(`Leo`);
// greeterHey(`Joao`);

// greet(`Hello`)(`Leo`);

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// greetArr(`Hello`)(`Leo`);

const lufthansa = {
  airline: `Lufthansa`,
  iataCode: `LH`,
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat of ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, `Leonardo Scarlato`);
lufthansa.book(635, `Fulano Sicrano`);
console.log(lufthansa);

const eurowings = {
  airline: `Eurowings`,
  iataCode: `EW`,
  bookings: [],
};

const book = lufthansa.book;

// Call Method
book.call(eurowings, 23, `Sarah Williams`);
console.log(eurowings);

book.call(lufthansa, 239, `Mary Cooper`);
console.log(lufthansa);

const swiss = {
  airline: `Swiss Air Lines`,
  iataCode: `LX`,
  bookings: [],
};

book.call(swiss, 583, `Mary Cooper`);
console.log(swiss);

// Apply Method
const flightData = [583, `George Cooper`];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData); // Mesma coisa que o anterior (linha 135)

// Bind Method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, `Steven Williams`);
console.log(eurowings);

const bookEW23 = book.bind(eurowings, 23);
bookEW23(`Leonardo Scarlato`);
bookEW23(`Martha Cooper`);
console.log(eurowings);

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(`.buy`)
  .addEventListener(`click`, lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
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
