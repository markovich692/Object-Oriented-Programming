'use strict';

const Person = function (firstName, birthYear) {
  //Instance Properties
  this.name = firstName;
  this.birthYear = birthYear;
  //   this.greet = function () {
  //     return `Hello, my name is ${this.name}`;
  //   };
};

const marc = new Person('Marc', 1992);
const steve = new Person('Steve', 1998);

// New {} is created
// function is called; this={}
// {} is linked to a prototype
// function automatically returns {} from the beginning

Person.prototype.calcAge = function () {
  return 2038 - this.birthYear;
};

// console.log(Person.prototype);

// console.log(marc.__proto__);

//Object.prototype
console.log(marc.__proto__.__proto__);

//The prototype of the object prototype
console.log(marc.__proto__.__proto__.__proto__);
