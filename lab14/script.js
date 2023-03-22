"use strict";
// async function getData() {
//   let data = await fetch(`https://disease.sh/v3/covid-19/nyt/usa`);
//   let jsonData = await data.json();
// }

async function getData() {
  let data = await fetch(`https://disease.sh/v3/covid-19/nyt/usa`);
  let jsonData = await data.json();
  console.log(jsonData);
}
getData();

function plotData(datas) {
  let cases = datas.map((data) => data.date);
}
