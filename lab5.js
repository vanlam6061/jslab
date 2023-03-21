"use strict";
//lab 5.1
const myCountry = {
  country: "Vietnam",
  capital: "Hanoi",
  language: "Vietnamese",
  population: 100,
  neighbours: ["lao", "Cambodia", "China"],
  describe: function () {
    let a = `${this.country} has ${this.population} milions finish-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
    console.log(a);
  },
  checkIsland: function () {
    let isIsland = false;
    if (this.neighbours.length === 0) {
      isIsland = true;
    }
    console.log(isIsland);
  },
};
//lab 5.2
console.log(
  `${myCountry.country} has ${myCountry.population} milions finish-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);
myCountry.population += 2;
myCountry["population"] -= 2;

//lab 5.3
myCountry.describe();
myCountry.checkIsland();
//lab 5.4
for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}
//lab 5.5
const arrayOfPopulation = [300, 400, 500, 700, 1000];
let arrayOfPercentage = arrayOfPopulation.map((arr) =>
  ((arr * 100) / 7900).toFixed(2)
);
console.log(arrayOfPercentage);
//lab 5.6
const listOfNeighbours = [
  ["Canade", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
listOfNeighbours.forEach((arr) => {
  arr.forEach((item, i) => {
    if (i >= 1) {
      console.log(item);
    }
  });
});
//lab 5.7
let i = 0;
let arrayOfPercentage3 = [];
while (i < arrayOfPopulation.length) {
  arrayOfPercentage3[i] = ((arrayOfPopulation[i] * 100) / 7900).toFixed(2);
  i++;
}
console.log(arrayOfPercentage3);
