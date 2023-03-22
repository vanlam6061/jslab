"use strict";
let button = document.getElementsByTagName("button")[0];
const poll = {
  question: "What is your favourite programming language? ",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  numberOfVotes: new Array(4).fill(0),
  registerNewAnswer: function () {
    let answer = prompt(
      `${this.question}?\n 
   ${this.options[0]}\n
   ${this.options[1]}\n
   ${this.options[2]}\n
   ${this.options[3]}`
    );
    if (answer > 3 || answer < 0 || answer == isNaN) {
      alert("Invalid answer!!");
    } else {
      switch (answer) {
        case "0":
          this.numberOfVotes[0] += 1;
          break;
        case "1":
          this.numberOfVotes[1] += 1;
          break;
        case "2":
          this.numberOfVotes[2] += 1;
          break;
        case "3":
          this.numberOfVotes[3] += 1;
          break;
        default:
      }
    }
  },
  displayResults: function (type) {
    let results;
    if (typeof type == "object") {
      results = type;
    }
    if (typeof type == "string") {
      results = `Poll results are ${type}`;
    }
    const newDiv = document.getElementsByTagName("div")[0];
    newDiv.innerHTML = "";
    newDiv.innerHTML = results;
  },
};
function clickAnswer() {
  poll.registerNewAnswer();
  poll.displayResults(poll.numberOfVotes);
}
