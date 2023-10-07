// https://www.youtube.com/watch?v=z3isDlyMqog&t=43s

const obj = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};

function deepFlatten(obj, prefix = "") {
  let output = {};

  for (let key in obj) {
    let val = obj[key];
    let newKey = prefix === "" ? key : prefix + "." + key;
    if (typeof val === "object") {
      let result = deepFlatten(val, newKey);
      output = { ...output, ...result };
    } else {
      output[newKey] = val;
    }
  }

  return output;
}

console.log(deepFlatten(obj));
// {
//     "A": "12"
//     "B": 23,
//     "C.O.L": 56,
//     "C.P": 23,
//     "C.Q.0": 1,
//     "C.Q.1": 2,
//   }
