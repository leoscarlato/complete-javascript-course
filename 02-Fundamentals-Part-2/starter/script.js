/*

'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log(`I can drive.`)



function logger(){
    console.log(`Hello world!`);
}

// calling the function
logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);



function calcAge(birthYear){
    // const age = 2023 - birthYear;
    // return age;
    return 2023 - birthYear;
}

const age = calcAge(2004);

// Anonymous function being stored in a variable
const calcAge2 = function (birthYear){
    return 2023 - birthYear;
}

const age2 = calcAge2(2004);
console.log(age, age2)



// Arrow function

const calcAge3 = birthYear => 2023 - birthYear;
console.log(calcAge3(2004));

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(2004, 'Leonardo'))

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2,3));


const calcAge = function(birthYear) {
    return 2023 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0){
        return `${firstName} retires in ${retirement} years.`;
    } else {
        return `Already retired!`
    }
}

console.log(yearsUntilRetirement(1950, `Leonardo`));

const friends = [`Michael`, `Steven`, `Peter`];
console.log(friends)

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends.length);



const friends = [`Michael`, `Steven`, `Peter`];
friends.push(`Jay`) // Adds element to the end of the array
console.log(friends)

friends.unshift(`John`);    // Adds element to the start of the array
console.log(friends);

friends.pop();  // Removes the last element of the array
console.log(friends);

friends.shift();    // Removes the first element of the array
console.log(friends);

console.log(friends.indexOf(`Steven`)); // Returns the index of the element

console.log(friends.includes(`Steven`));    // Returns a boolean value depending if an element is in the array or not
console.log(friends.includes(`Bob`));

function calcTip (billValue) {
    let tip;
    if (billValue >= 50 && billValue <= 300){
        tip = 0.15 * billValue;
    } else {
        tip = 0.2 * billValue;
    }
}

console.log(calcTip(125))


const person = {
    firstName: `Leonardo`,
    lastName: `Scarlato`,
    age: 2023 - 2004,
    job: `student`,
    friends: [`Michael`, `Steven`, `Peter`]
}

console.log(person[`firstName`])
console.log(person[`age`])

console.log(person.friends)

console.log(`${person[`firstName`]} has ${person[`friends`].length} friends, and his best friend is called ${person[`friends`][0]}`)


const person = {
    firstName: `Leonardo`,
    lastName: `Scarlato`,
    job: `student`,
    friends: [`Michael`, `Steven`, `Peter`],
    birthYear: 2004,
    hasDriversLicense: false,

    calcAge: function () {
        this.age = 2023 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriversLicense ? `a` : `no`} driver's license.`
    }
};

console.log(person.calcAge())
console.log(person.age);

console.log(person.getSummary());

*/

for (let rep = 1; rep <= 10; rep++){
    console.log(rep)
}