'use strict';

const obj = {
  name: 'Marc',
  age: 32,
  education: 'Undergraduate',
};

Object.entries(obj).forEach(function (cur, i) {
  const [key, value] = cur;
  console.log(key + ':', value, i);
});

const newMap = new Map([
  ['firstName', 'marc'],
  ['age', 32],
  [true, 'work'],
]);

console.log(newMap.values);

for (const el of [...newMap]) {
  console.log(el);
  const [key, value] = el;

  if (key === true) {
    console.log(`The student ${value}`);
  }
}
