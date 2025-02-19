'use strict';

// const Person = function (firstName, birthYear) {
//Instance Properties
// this.name = firstName;
// this.birthYear = birthYear;
//   this.greet = function () {
//     return `Hello, my name is ${this.name}`;
//   };
// };

// const marc = new Person('Marc', 1992);
// const steve = new Person('Steve', 1998);

// New {} is created
// function is called; this={}
// {} is linked to a prototype
// function automatically returns {} from the beginning

// Person.prototype.calcAge = function () {
//   return 2038 - this.birthYear;
// };

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

const Driver = class {
  constructor(name, age, licenseType) {
    this.name = name;
    this.age = age;
    this.licenseType = licenseType;
  }

  //The setter will check fot the licenseType property and validates it
  set licenseType(licenseType) {
    if (licenseType === 'A' || licenseType === 'B' || licenseType === 'C')
      return (this._licenseType = licenseType);
    else alert('Licence type not valid, please try again!');
  }

  //Instance method
  get licenseType() {
    return this._licenseType;
  }

  //Static method
  static greet() {
    // console.log('Hello there!');
  }
};

Driver.greet();

const nicholas = new Driver('Nicholas', 18, 'A');

// nicholas.greet();
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

//Building the Test constructor
const Test = function (fName, age) {
  this.fName = fName;
  this.age = age;
};

//Creates the nneka object; instance of the Test constructor
const nneka = new Test('Nneka', 21);

//static method
Test.greetings = function () {
  // console.log('Hello, world!');
};

Test.greetings();
// nneka.greetings();

const PersonProto = {
  calcAge() {
    return 2037 - this.birthYear;
  },

  //To implement the name and birthYear properties of the Object we want to create
  init(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

//Sets the name and birthYear manually
steven.name = 'Steven';
steven.birthYear = 1997;
// steven.init('Steven', 1888);
// console.log(steven);

const jerry = Object.create(PersonProto);

//Uses the init method to set the name and birthYear
jerry.init('Jerry', 1994);

// console.log(jerry);

jerry.calcAge();

// CHALLENGE 1
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

// Challenge #2
// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/h

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  // Implements the accelerate method
  accelerate() {
    this.speed = this.speed + 10;
    console.log(`${this.make} going at ${this.speed}km/h`);
  }

  //Implements the break property
  brake() {
    this.speed = this.speed - 5;
    console.log(`${this.make} going at ${this.speed}km/h`);
  }

  //Getter that returns the speed in mi/h
  get speedUS() {
    // console.log(this.speed / 1.6);
  }

  set speedUS(speed) {
    //Converts the spped from US mi/h to Km/h and sets it
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);

ford.speedUS;

//OBJECT.CREATE
const objTestProto = {
  greet: function () {
    // console.log('Hello my friend, How are you?');
  },

  credentials: function (name, age) {
    this.name = name;
    this.age = age;
  },
};

const jonas = Object.create(objTestProto);

jonas.credentials('Jonas', 32);

jonas.greet();

//CLASSES INHERITANCE

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(`${2037 - this.birthYear}`);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// //Links the Student class to the Parent class
// Student.prototype = Object.create(Person.prototype);

// // console.log(Student.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I am in ${this.course}.`);
// };

// const bill = new Student('Bill', 1999, 'Computer science');
// bill.introduce();

// bill.calcAge();

const Employee = function (firstName, age) {
  this.firstName = firstName;
  this.age = age;
  //This will be carried on all instances--not good for performance
  // this.introduction = function () {
  //   console.log(`My name is ${this.firstName} and I am ${age} years old.`);
  // };
};

//Defines the introduction method on the prototype property of EMployee constructor
//--Better for performance--
Employee.prototype.introduction = function () {
  console.log(`My name is ${this.firstName} and I am ${age} years old.`);
};

const henry = new Employee('Henry', 33);
const francesca = new Employee('Francesca', 23);
const filipe = new Employee('Filipe', 32);

// console.log(henry.__proto__ === Employee.prototype);
// console.log(Employee.prototype.__proto__.hasOwnProperty('hasOwnProperty'));

const EmployeeCl = class {
  constructor(firstName, age) {
    this.firstName = firstName;
    this.age = age;
  }

  //instances methods
  get wipe() {
    console.log(`${this.firstName} is wiping the floor.`);
  }
  //static methods
  static dive() {
    // console.log(`Employee dives.`);
  }
};

const mellow = new EmployeeCl('Mellow', 16);

// console.log(EmployeeCl.prototype === mellow.__proto__);

//Set a static method on the EmployeeCl class
EmployeeCl.greet = function () {
  // console.log('Hello, I am the constructor');
};

EmployeeCl.dive();

//Object.create

const objProto = {
  infos(fName, age) {
    this.fName = fName;
    this.age = age;
  },

  calcAge: function () {
    console.log(`My name is ${this.fName} and I am ${this.age} years old.`);
  },
};

//Links the nathan object .__proto__ property to the objProto object
const nathan = Object.create(objProto);

// nathan.infos('Nathan', 16);
// nathan.calcAge();

const Worker = function (lname, birthYear) {
  this.lname = lname;
  this.birthYear = birthYear;
};

const Clerk = function (lname, birthYear, shift) {
  //Sets the this to empty Clerk Object
  Worker.call(this, lname, birthYear);
  this.shift = shift;
};

Clerk.prototype = Object.create(Worker.prototype);

// console.log(Worker.prototype);
// console.log(Clerk.prototype.__proto__ === Worker.prototype);

// console.log(Clerk.prototype.__proto__ === Worker.prototype);
Worker.prototype.calcAge = function () {
  console.log(2037 - this.age);
};

// console.log(Worker.prototype);
// console.log(Clerk.prototype.__proto__);
// console.log(Clerk.prototype.__proto__ === Worker.prototype);

//Challenge 3
// 1. Use a constructor function to implement an Electric Car (called'EV')
// as a child "class" of 'Car'. Besides a make and current speed, the 'EV'
// also has the current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and
// sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20, and
// decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate', 'brake'
// and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'!
// Hint: Review the definiton of polymorphism 😉
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
// GOOD LUCK 😀

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

// Implements the accelerate method
Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(`${this.make} going at ${this.speed}km/h`);
};

// Implements the brake method
Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(`${this.make} going at ${this.speed}km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);

  this.charge = `${charge}`;
};

//Links the child EV class to the parent Car class
EV.prototype = Object.create(Car.prototype);

const volvo = new EV('Volvo', 120, 26);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = `${chargeTo}`;
};

EV.prototype.accelerate = function () {
  this.speed = this.speed + 20;
  this.charge = this.charge - 1;
  console.log(
    `${this.make} going at ${this.speed}km/h with a charge of ${this.charge}%.`
  );
};

volvo.chargeBattery(50);
console.log(volvo);

volvo.accelerate();
volvo.accelerate();

//Note that here we have two accelerate methods, one on the Car.prototype property and
//the other one on the EV.prototype property and calling it on the volvo object will
//execute the first accelerate method in the prototype chain

//Inheritance between Classes using ES6 CLASSES

const PlayerCl = class {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }
};
