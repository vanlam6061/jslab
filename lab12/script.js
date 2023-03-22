"use strict";
const dogJulia = [3, 5, 2, 12, 7];
const dogKate = [4, 1, 15, 8, 3];
function checkDogs(dogJulia, dogKate) {
  dogJulia.shift();
  dogJulia.pop();
  const totalDogs = dogJulia.concat(dogKate);
  totalDogs.forEach((dog, i) => {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else if (dog < 3 && dog > 0) {
      console.log(`Dog number ${i + 1} is still a puppy`);
    } else {
      console.log("Invalid value");
    }
  });
}
checkDogs(dogJulia, dogKate);
