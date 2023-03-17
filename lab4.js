"use strict";
//lab 4.1
// function describeCountry(country, population, capitalCity) {
//   console.log(
//     `${country} has ${population} milion people and its capital city is ${capitalCity}`
//   );
// }
// describeCountry("Finland", 6, "Helsinki");
// describeCountry("Vietnam", 100, "Hanoi");
// describeCountry("India", 1500, "New Delhi");
//Lab 4.2
function percentageOfWorld(population) {
  let percentage = (population * 100) / 7900;
  return percentage.toFixed(2);
}
percentageOfWorld(1400);
const percentageOfWorld2 = function (population) {
  let percentage = (population * 100) / 7900;
  console.log(percentage.toFixed(2));
};
percentageOfWorld2(500);
// lab 4.3
const percentageOfWorld3 = (population) => {
  let percentage = (population * 100) / 7900;
  console.log(percentage.toFixed(2));
};
//lab 4.4
function describePopulation(country, population) {
  let percentage = (population * 100) / 7900;
  console.log(
    `${country} has ${population} million people, which is about ${percentage.toFixed(
      1
    )}% of the world'.`
  );
}
describePopulation("China", 1500);
describePopulation("France", 300);
describePopulation("Germany", 400);
//lab 4.5
const arrayOfPopulation = [300, 400, 500, 700];
arrayOfPopulation.length === 4 ? console.log("true") : console.log("false");
let percentage = [];
for (let i = 0; i < arrayOfPopulation.length; i++) {
  percentage[i] = percentageOfWorld(arrayOfPopulation[i]);
}
console.log(percentage);
//lab 4.6
