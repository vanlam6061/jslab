"use strict";
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }
  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }
}
const bmw = new CarCl("Germany", 95);
bmw.accelerate();
bmw.brake();

class EVCl extends CarCl {
  constructor(make, speed, charge) {
    super(make, speed);
    this.charge = charge;
  }
  chargeBattery(chargeTo) {
    this.charge = chargeTo;
  }
  brake() {
    this.speed -= 10;
    console.log(this.speed);
  }
}
const Bmw = new EVCl("Germany", 115, 23);
Bmw.accelerate();
Bmw.brake();
Bmw.chargeBattery(50);
