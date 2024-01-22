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

const flight = `LH234`;
const leo = {
  name: `Leonardo Scarlato`,
  passport: 230872340892341,
};

const checkIn = function (flightNum, passenger) {
  flightNum = `LH999`;
  passenger.name = `Mr. ` + passenger.name;

  if (passenger.passport === 230872340892341) {
    alert(`Check In`);
  } else {
    alert(`Wrong Passport`);
  }
};

// checkIn(flight, leo);
// console.log(flight);
// console.log(leo);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(leo);
checkIn(flight, leo);
console.log(leo);
