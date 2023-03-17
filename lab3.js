"use strict";
// Lab 3.1
console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);
//lab 3.2
let numNeighbors = prompt(
  "How many neighbor countries does your country have?"
);

//1.
numNeighbors === 1
  ? console.log("Only 1 border")
  : console.log(" More than one border");

// lab 3.3
let inputLanguage = prompt("Please  choose the language");
let inputPopulation = prompt("Please choose the population");
let inputIsIsland = prompt("Please choose is it  the island");
if (
  inputLanguage == "english" &&
  inputPopulation <= 50 &&
  inputIsIsland == "true"
) {
  console.log("You should live in Portugal");
} else {
  console.log("Portugal does not meet your criteria");
}
// lab 3.4
let language = "Spanish";
switch (language) {
  case "chinaOrMandarin":
    console.log("MOST number of native speakers");
    break;
  case "Spanish":
    console.log("MOST number of native speakers");
    break;
  case "English":
    console.log("MOST number of native speakers");
    break;
  case "Hindi":
    console.log("MOST number of native speakers");
    break;
  case "Arabic":
    console.log("MOST number of native speakers");
    break;
  default:
    console.log("Great language too:D");
    break;
}
//lab 3.5
let population = 50;
population >= 33
  ? console.log("Portugal 's population is above average")
  : console.log("Portugal's population is below average");
