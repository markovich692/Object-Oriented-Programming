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
// Your tasks:
//1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 'speed' property.
//The 'speed' property is the current speed of the car in km/h
//2. Implement an 'accelerate' method that will increase the car's speed by10, and log the new speed
//to the console
//3. Implement a 'brake' method that will decrease the car's speed by 5,and log the new speed to the console
//4. Create2 'Car' objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

//Implements the accelerate method
// Car.prototype.accelerate = function () {
//   this.speed = this.speed + 10;
//   console.log(`${this.make} going at ${this.speed}km/h`);
// };

//Implements the brake method
// Car.prototype.brake = function () {
//   this.speed = this.speed - 5;
//   console.log(`${this.make} going at ${this.speed}km/h`);
// };

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);

// car1.accelerate();
// car1.accelerate();
// car1.brake();
// car1.brake();

// car2.accelerate();
// car2.accelerate();
// car2.brake();

//Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge = function () {
    console.log(2037 - this.birthYear);
  };

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert('Try again');
  }
}

const jessica = new PersonCl('Jessica Lyn', 1996);
// console.log(jessica);

const account = {
  owner: 'Jonas',
  movements: [200, 150, 20, 400],
  get latest() {
    return this.movements.slice(-1).at(0);
  },

  set latest(mov) {
    return this.movements.push(mov);
  },
};

account.latest = 50;
// console.log(account);

// console.log([1, 1, 3].includes(3), 'marc'.includes('b'));

class Driver {
  constructor(name, age, licenseType) {
    this.name = name;
    this.age = age;
    this.licenseType = licenseType;
  }

  //The setter will check fot the licenseType property and validate it
  set licenseType(licenseType) {
    if (licenseType === 'A' || licenseType === 'B' || licenseType === 'C')
      return (this._licenseType = licenseType);
    else alert('Licence type not valid, please try again!');
  }

  get licenseType() {
    return this._licenseType;
  }
}

const nicholas = new Driver('Nicholas', 18, 'A');
// console.log(nicholas);
//output: {
//   "name": "Nicholas",
//   "age": 18,
//   "_licenseType": "A"
// }

// console.log(nicholas.licenseType);
//output: A
//Note that this output 'A' because of the
// get licenseType() {
//   return this._licenseType;
// }

//STATIC METHOD
const Test = function (fName, age) {
  this.fName = fName;
  this.age = age;
};

const nneka = new Test('Nneka', 21);

Test.greetings = function () {
  console.log('Hello, world!');
};

Test.greetings();
nneka.greetings();
