// Input:
const obj = {
  a: {
    b: {
      c: [1, 2, 3],
    },
  },
};

function get(obj, path) {
  if (path === "") return undefined;

  path = path.replace("[", ".");
  path = path.replace("]", "");
  path = path.split(".");

  let newObj = { ...obj };

  for (let key of path) {
    newObj = newObj[key];
  }

  return newObj;
}

console.log(get(obj, "a.b.c")); // [1,2,3]
console.log(get(obj, "a.b.c.0")); // 1
console.log(get(obj, "a.b.c[1]")); // 2
console.log(get(obj, "a.b.c[3]")); // undefined
