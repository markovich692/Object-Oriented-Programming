'use strict';

const Person = function (firstName, birthYear) {
  this.name = firstName;
  this.birthYear = birthYear;
  this.greet = function () {
    return `Hello, my name is ${this.name}`;
  };
};

const marc = new Person('Marc', 1992);
const steve = new Person('Steve', 1998);

console.log(marc.greet());

// New {} is created
// function is called; this={}
// {} is linked to a prototype
// function automatically returns {} from the beginning
