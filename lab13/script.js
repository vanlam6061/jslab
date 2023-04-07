"use strict";
//13.1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};
const bmw = new Car("Germany", 95);
bmw.accelerate();
bmw.brake();

//13.3
const CarEV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
CarEV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
CarEV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `'Tesla going at ${this.speed}, with a charge of ${this.charge}%`
  );
};
const toyota = new CarEV("Toyota", 120, 23);
toyota.accelerate(70);
