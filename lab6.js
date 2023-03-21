"use strict";
let arr = [17, 21, 23];
function printForecast(arr) {
  arr.forEach((item, i) => console.log(`${item}oC in ${i + 1} day`));
}
let arr1 = [27, 21, 23];
let arr2 = [12, 5, -5, 0, 4];
printForecast(arr1);
printForecast(arr2);
