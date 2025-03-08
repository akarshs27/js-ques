// Polyfill for lodash _get method
// https://www.youtube.com/watch?v=gXIHJCCDJPQ&t=123s

let obj1 = {
  a: {
    b: {
      c: [1, 2, 3],
    },
  },
};

function getValue(obj, str) {
  if (str.length === 0) return undefined;

  let excludedKeys = ["[", "]", "."];
  let keys = [];
  for (let i = 0; i < str.length; i++) {
    if (!excludedKeys.includes(str[i])) {
      keys.push(str[i]);
    }
  }
  let value = keys.reduce((acc, key) => acc[key], obj);
  return value;
}

console.log(getValue(obj1, "a.b.c")); // [1,2,3]
console.log(getValue(obj1, "a.b.c.0")); // 1
console.log(getValue(obj1, "a.b.c[1]")); // 2
console.log(getValue(obj1, ["a", "b", "c", "2"])); // 3
console.log(getValue(obj1, "a.b.c[3]")); // undefined
console.log(getValue(obj1, "a.c")); // undefined
