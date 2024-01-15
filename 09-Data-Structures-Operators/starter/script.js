'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 1,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}!`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: `Giovanni Rossi`,
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// // AND assignment operator
// rest1.owner = rest1.owner && `<ANONYMOUS>`;
// rest2.owner = rest2.owner && `<ANONYMOUS>`;
rest1.owner &&= `<ANONYMOUS>`;
rest2.owner &&= `<ANONYMOUS>`;

console.log(rest1);
console.log(rest2);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// // Nullish: null and undefined (does not include 0 or '' (0 and '' are not falsy values in this case))
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// console.log(`--------- OR --------`);

// // Use ANY data type, return ANY data type, short-circuiting (if the first value is a truthy value, it returns that value)
// console.log(3 || `Leo`);
// console.log(`` || 'Leo');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null); // retorna Hello -> primeiro valor que é truthful

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log(`------- AND -------`);

// console.log(0 && 'Leo');
// console.log(7 && 'Leo');

// console.log('Hello' && 23 && null && 'leo'); // retorna null -> valor falso (short-circuit)

// if (restaurant.orderPizza) {
//   restaurant.orderPizza(`mushrooms`, `spinach`);
// }

// restaurant.orderPizza && restaurant.orderPizza(`mushrooms`, `spinach`);

// // SPREAD, because on RIGHT side of =
// const arr = [1,2, ...[3,4]];

// // REST, because on LEFT side of =
// const [a, b, ...others] = [1,2,3,4,5];
// console.log(a,b,others);

// const [pizza, pasta, risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, pasta, risotto, otherFood);

// // Objects
// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);

// // Functions
// const add = function(...numbers){

//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++){
//     sum += numbers[i];
//   }

//   console.log(sum);
// }

// add(2, 3);
// add(5, 3, 7, 2);
// add(8,2,5,3,2,1,4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza(`mushrooms`, `onion`, `olives`, `spinach`);
// restaurant.orderPizza(`mushrooms`);

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// // spread operator
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // join 2 arrays
// const menu = [
//   ...restaurant.starterMenu,
//   ...restaurant.mainMenu
// ];

// console.log(menu);

// // Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Leonardo';
// const letters = [...str, '', 's'];
// console.log(letters);
// console.log(...str);

// // Real-world example
// // const ingredients = [
// //   prompt("Let's make pasta! Ingredient 1?"),
// //   prompt("Ingredient 2?"),
// //   prompt("Ingredient 3?")
// // ];

// // restaurant.orderPasta(...ingredients);

// // Objects

// const newRestaurant = {foundedIn:1998, ...restaurant, founder:"Giuseppe Camole"};
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = "Ristorante Roma";
// console.log(`Old name: ${restaurant.name}`);
// console.log(`New name: ${restaurantCopy.name}`);

// restaurant.orderDelivery({
//   address: 'Rua dos Bobos',
//   starterIndex: 2,
// });

// // // Destructuring Objects

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
// console.log(restaurantName, hours, tags);

// // // Default values -> se o valor não existir, ele assume o valor default ("[]")
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14};
// ({ a, b } = obj);
// console.log(a, b);

// // // Nested objects
// const {fri: {open:o, close:c}} = openingHours;
// console.log(o, c);

// // Destructuring Arrays
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2]; // old way

// const [x, y, z] = arr; // destructuring way
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories; // skip second element
// console.log(main, secondary);

// // Switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// // destructuring way
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

///////////////////////////////////////////////////////////////////////////////

// // Coding Challenge #1

// /*
// We're building a football betting app (soccer for my American friends 😅)!

// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name,
// and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
// */

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1.
// const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

// // 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk);

// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4.
// const substitutes = ['Thiago', 'Coutinho', 'Perisic'];
// const players1Final = [...players1, ...substitutes];
// console.log(players1Final);

// // 5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6.
// const printGoals = function (...playerNames) {
//   console.log(playerNames);
//   console.log(`${playerNames.length} goals were scored!`);
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// // 7.
// const moreLikelyToWin = function (odd1, odd2) {
//   odd1 < odd2 && console.log('Team 1 is more likely to win')
//   odd1 > odd2 && console.log('Team 2 is more likely to win')
// };

// moreLikelyToWin(team1, team2);

//////////////////////////////////////////////////////////////////

// For Of

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) {
//   console.log(item);
// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// Optional Chaining

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // console.log(restaurant.openingHours.mon.open);

// // WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// // Arrays
// const users = [{ name: 'Leo', email: 'hello@leo.io' }];
// // const users = [];

// console.log(users[0]?.name ?? 'User array empty');

// if (users.length > 0) console.log(users[0].name);
// else console.log('user array empty');

// Looping Objects: Object Keys, Values, and Entries

// Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // Entire object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// // [key, value]
// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

///////////////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1.
// for (const [i, el] of game.scored.entries()) {
//   console.log(`Goal ${i + 1} scored by ${el}`);
// }

// // 2.
// const odds = Object.values(game.odds);
// let average = 0;
// for (let i = 0; i < odds.length; i++) average += odds[i];
// average /= odds.length;
// console.log(average);

// // 3.
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr =
//     team === 'x' ? 'draw' : team === 'team1' ? game.team1 : game.team2;
//   console.log(`Odd of victory ${teamStr}: ${odd}`);
// }

// // Bonus
// const scorers = {};
// for (const item of game.scored) {
//   scorers[item] ? scorers[item]++ : (scorers[item] = 1);
// }

// console.log(scorers);

// // Sets
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(ordersSet);
// console.log(new Set('Leonardo'));
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Garlic Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = new Set(staff);
// const staffUniqueArray = [...staffUnique];
// console.log(staffUniqueArray);

// // Map

// const rest = new Map();
// rest.set(`name`, `Classico Italiano`);
// rest.set(1, `Firenze, Italy`);
// console.log(rest.set(2, `Lisbon, Portugal`));

// rest
//   .set(`categories`, [`Italian`, `Pizzeria`, `Vegetarian`, `Organic`])
//   .set(`open`, 11)
//   .set(`close`, 23)
//   .set(true, `We are open!`)
//   .set(false, `We are closed!`);

// console.log(rest.get(`name`));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get(`open`) && time < rest.get(`close`)));

// console.log(rest.has(`categories`));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);

// const question = new Map([
//   [`question`, `What is the best programming language?`],
//   [1, `C`],
//   [2, `Java`],
//   [3, `JavaScript`],
//   [`correct`, 3],
//   [true, `correct`],
//   [false, `try again`],
// ]);
// console.log(question);

// // Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Quiz
// console.log(question.get(`question`));
// for (const [key, value] of question) {
//   if (typeof (key == `number`)) console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt(`Your answer`));
// // console.log(answer);

// // if (answer === question.get(`correct`)) {
// //   console.log(question.get(true));
// // } else {
// //   console.log(question.get(false));
// // }

// // Convert map to array
// console.log([...question]);
// console.log(question.entries());
// console.log(question.keys());
// console.log(question.values());

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, 
and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // 1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2.
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3.
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// // 4.
// for (const [key, value] of gameEvents) {
//   if (key < 45) {
//     console.log(`[FIRST HALF] ${key}: ${value}`);
//   } else {
//     console.log(`[SECOND HALF] ${key}: ${value}`);
//   }
// }

// Strings
// const airline = `LATAM`;
// // const plane = `A320`;

// // console.log(plane[0]);
// // console.log(plane[1]);
// // console.log(plane[2]);
// // console.log(`B737`[0]);

// // console.log(airline.length);
// // console.log(`B737`.length);

// // console.log(airline.indexOf(`L`));
// // console.log(airline.lastIndexOf(`A`));

// // console.log(airline.slice(2));
// // console.log(airline.slice(2, 4));

// // console.log(airline.slice(0, airline.indexOf(`T`)));

// // const checkMiddleSeat = function (seat) {
// //   // B and E are middle seats
// //   const s = seat.slice(-1);
// //   if (s === `B` || s === `E`) {
// //     console.log(`You got the middle seat`);
// //   } else {
// //     console.log(`You got lucky`);
// //   }
// // };

// // checkMiddleSeat(`11B`);
// // checkMiddleSeat(`23C`);
// // checkMiddleSeat(`3E`);

// console.log(airline.toLowerCase());
// console.log(`leo`.toUpperCase());

// // Fix capita;lization in name
// const passenger = `lEoNaRdO`;
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing emails
// const email = `hello@leo.io`;
// const loginEmail = `  Hello@leo.Io \n`;

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(normalizedEmail === email);

// // replacing
// const priceGB = `R$288,97`;
// const priceUS = priceGB.replace(`R`, `U`).replace(`,`, `.`);
// console.log(priceUS);

// const announcement = `All passengers come to boarding door 23. Boarding door 23`;
// console.log(announcement.replace(`door`, `gate`));

// // // Substituindo todas as ocorrencias de door
// console.log(announcement.replace(/door/g, `gate`));

// // Booleans
// const plane = `Airbus A320neo`;
// console.log(plane.includes(`A320`));
// console.log(plane.includes(`Boeing`));
// console.log(plane.startsWith(`Air`));

// if (plane.startsWith(`Airbus`) && plane.endsWith(`neo`)) {
//   console.log(`Part of the new Airbus family`);
// }

// // Exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes(`knife`) || baggage.includes(`gun`)) {
//     console.log(`You are not allowed on board`);
//   } else {
//     console.log(`Welcome aboard!`);
//   }
// };

// checkBaggage(`I have a laptop, some Food and a pocket Knife`);
// checkBaggage(`Socks and camera`);
// checkBaggage(`Got some snacks and a gun for protection`);

console.log(`a+nice+string`.split(`+`));
console.log(`Leonardo Scarlato`.split(` `));
const [firstName, lastName] = `Leonardo Scarlato`.split(` `);

const newName = [`Mr.`, firstName, lastName.toUpperCase()].join(` `);
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(` `);
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesUpper.join(` `));
};

capitalizeName(`jessica ann smith davis`);
capitalizeName(`leonardo Scarlato`);

// Padding
const message = `Go to gate 23`;
console.log(message.padStart(25, `+`).padEnd(35, `+`));
console.log(`Leo`.padStart(25, `+`).padEnd(35, `+`));

const maskCreditCard = function (number) {
  const str = number + ``; // number to string
  const last = str.slice(-4); // 4 ultimos digitos
  return last.padStart(str.length, `*`);
};

console.log(maskCreditCard(6432764278642));
console.log(maskCreditCard(`293847893748423`));

// Repeat
const message2 = `Bad weather... All Departures Delayed... `;
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${`✈`.repeat(n)}`);
};
planesInLine(3);
planesInLine(10);
