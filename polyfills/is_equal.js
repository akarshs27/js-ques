// Polyfill for comparing two object or lodas.isEqual
// https://www.youtube.com/watch?v=VYmf4EWe4IQ

const obj1 = { a: 1, b: 2, c: { d: 4 } };
const obj2 = { a: 1, b: 2, c: { d: 4 } };

// console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); true
// It will become false if we change the positon of any of the keys

// const obj1 = { a: 1, b: 2, c: { d: 4 } };
// const obj2 = { b: 1, a: 2, c: { d: 4 } };
// console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); false

const arr1 = [1, 2, 3, [4, 5]];
const arr2 = [1, 2, 3, [4, 5]];

function isObject(value) {
  return value !== null && typeof value === "object";
}

function compareObjects(obj1, obj2) {
  const keysObj1 = Object.keys(obj1);
  const keysObj2 = Object.keys(obj2);

  if (keysObj1.length !== keysObj2.length) return false;

  for (let key of keysObj1) {
    const value1 = obj1[key];
    const value2 = obj2[key];

    const isObjects = isObject(value1) && isObject(value2);

    if (!isObjects && value1 !== value2) {
      return false;
    }

    if (isObjects && !compareObjects(value1, value2)) {
      return false;
    }

    return true;
  }
}

console.log(compareObjects(obj1, obj2)); // true
console.log(compareObjects(arr1, arr2)); // true
