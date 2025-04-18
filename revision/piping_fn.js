// Input:
const obj = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b - c,
  },
  d: (a, b, c) => a - b - c,
};

// Fn(obj)(1,1,1);

// Output:
// {
//   a : {
//     b : 3,
//     c : 1
//   },
//   d: -1
// }

function computeObj(obj) {
  return function (...args) {
    for (let key in obj) {
      let val = obj[key];
      if (typeof val === "function") {
        obj[key] = val(...args);
      } else {
        obj[key] = computeObj(val)(...args);
      }
    }
    return obj;
  };
}

const fn = computeObj(obj)(1, 1, 1);
console.log(fn);
