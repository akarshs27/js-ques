// Input:
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

// Output:
// {
//   "A": "12"
//   "B": 23,
//   "C.O.L": 56,
//   "C.P": 23,
//   "C.Q.0": 1,
//   "C.Q.1": 2,
// }

function deeplyflatten(obj, prefix = "") {
  let output = {};

  for (let key in obj) {
    let val = obj[key];
    let newKey = prefix === "" ? key : prefix + "." + key;
    if (typeof val === "object") {
      let recursiveOutput = deeplyflatten(val, newKey);
      output = { ...output, ...recursiveOutput };
    } else {
      output[newKey] = val;
    }
  }

  return output;
}

console.log(deeplyflatten(obj));

let newObj = ["one", "two"];

for (let key in newObj) {
  console.log("key", key); // 0
  console.log("value", newObj[key]); // one
}
