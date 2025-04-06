const arr = [2, 4, [5, 6]];
// const arr2 = arr;
// arr2.push(8);
// arr2[2].push(9);
// console.log(arr);  [2,4, [5,6, 9], 8]
// console.log(arr2);  [2,4, [5,6, 9], 8]

// We can create shallow copy by [...] spread operator

// const arr3 = [...arr];
// arr3.push(8);
// arr3[2].push(9);
// console.log(arr);  [ 2, 4, [ 5, 6, 9 ] ]
// console.log(arr3);  [ 2, 4, [ 5, 6, 9 ], 8 ]

// Still nested array is getting mutated.
// Same thing happens for the object

// const obj = {
//   a: {
//     b: "Hi",
//   },
// };

// const obj2 = obj;
// obj2["a"].b = null;
// console.log(obj); {a: { b: null;}}
// console.log(obj2); { a: { b: null; } }

function deepClone(val) {
  if (val === null || typeof val !== "object") {
    return val;
  } else if (Array.isArray(val)) {
    return val.map((el) => deepClone(el));
  } else if (typeof val === "object") {
    return Object.keys(val).reduce((acc, key) => {
      acc[key] = deepClone(val[key]);
      return acc;
    }, {});
  }
}

const obj = {
  a: {
    b: "Hi",
  },
};

const obj2 = deepClone(obj);
obj2["a"].b = null;
console.log(obj);
console.log(obj2);
