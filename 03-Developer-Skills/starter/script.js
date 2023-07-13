// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(`${array[i]}°C in ${i + 1} days.`)
  }
};

printForecast(data1);