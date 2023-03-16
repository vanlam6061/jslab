"use strict";
const weightJohn = 92;
const weightMark = 78;
const heightJohn = 1.95;
const heightMark = 1.69;
const bmiJohn = weightJohn / (heightJohn * heightJohn);
const bmiMark = weightMark / (heightMark * heightMark);
const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

if (markHigherBMI) {
  console.log("Mark's BMI is higher than John's!");
  console.log(
    `Mark's BMI ${bmiMark.toFixed(2)} is higher than John's ${bmiJohn.toFixed(
      2
    )})!`
  );
} else {
  console.log("John's BMI is higher than Mark's!");
  console.log(
    `John's BMI ${bmiJohn.toFixed(2)} is higher than Mark's ${bmiMark.toFixed(
      2
    )})!`
  );
}
