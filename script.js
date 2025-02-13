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

//Object.prototype(top of prototype chain)
// console.log(marc.__proto__.__proto__);
// console.log(marc.__proto__.__proto__.__proto__);

// console.dir(arr.__proto__);

const arr = [1, 2, 3, 3, 5, 5, 4, 4, 5];

// console.log(Array.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

arr.unique();

//CHALLENGE 1
