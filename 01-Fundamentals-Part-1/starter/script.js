/*
// Variables class

let js = 'amazing';
console.log(40+8+23-10);

console.log('Jonas');
console.log(23);

let firstName = 'Jonas';
console.log(firstName);

// Variables challange

let country = 'Brazil';
let continent = 'South America';
let population = 250000000

console.log(country);
console.log(continent);
console.log(population) 

// Data types

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Leo');

// let, const and var

/*

let -> use it when you are sure that the
value of the variable will change in the 
future;

var -> similar to let, but older;

const -> use it when the value of the variable
will not change



let age = 30;
age = 31

const birthYear = 2004;



// Basic Operators

const now = 2023;

const ageLeo = now - 2004
console.log(ageLeo)

const firstName = 'Leonardo';
const lastName = 'Scarlato';

console.log(firstName + ' ' + lastName)

let x = 10 + 5;
x += 10;
x--;
console.log(x)

console.log(ageLeo > 10)
console.log(ageLeo < 10)



// CODE CHALLENGE #1

let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark);
console.log(BMIJohn);

//


const firstName = 'Leonardo';
const job = 'student';
const birthYear = 2004;
const currentYear = 2023;

const leo = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' year old ' + job + '!'
console.log(leo)

const leoNew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}!`
console.log(leoNew)

const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough){
    console.log(`Old enough!`)
} else {
    console.log(`Wait ${18 - age} years!`)
}



// CODE CHALLENGE #2

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIJohn > BMIMark) {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
} else {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
}



// BOOLEAN LOGIC
 
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision

if (shouldDrive) {
    console.log(`Is able to drive!`)
} else {
    console.log(`Someone else should drive...`)
}


const day = `thursday`;

switch(day){

    case `monday`:  // day == `monday`
        console.log(`Plan course structure`);
        console.log(`Go to coding meetup`);
        break;

    case `tuesday`:
        console.log(`Prepare theory videos`);
        break;

    case `wednesday`:
    case `thursday`:
        console.log(`Write code examples`);
        break;

    case `friday`:
        console.log(`Record videos`);
        break;

    case `saturday`:
    case `sunday`:
        console.log(`Enjoy the weekend`)
        break;
    default:
        console.log(`Not a valid day!`)
}

const age = 23;
age >= 18 ? console.log(`I like to drink wine`):
console.log(`I like to drink water`)

*/