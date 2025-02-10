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

Person.prototype.greet = function () {
  console.log('called');
  return `Hello, my name is ${this.name}`;
};

console.log(Person.prototype);
