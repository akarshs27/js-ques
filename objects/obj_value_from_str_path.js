// https://www.youtube.com/watch?v=h1NYagkZ3hk&t=247s

function get(obj, path) {
  let newPath = path
    .replaceAll("[", ".")
    .replaceAll("]", ".")
    .split(".")
    .filter(Boolean);
  console.log("newPath", newPath);

  let current = obj;
  for (let key of newPath) {
    console.log("key", key);
    current = current[key];
    console.log("current", current);
    if (current === undefined) return undefined;
  }

  return current;
}

console.log(get({ developer: "Software Engineer" }, "developer"));
console.log(
  get(
    { developer: { firstName: "Tom", lastName: "Cruz" } },
    "developer.lastName"
  )
);
console.log(get([{ developer: "Tom" }, { count: [0, 1] }], "[1].count[0]"));
console.log(get([{ developer: "Tom" }, [0, null]], "[1][1]"));
console.log(get([{ developer: "Tom" }, [0, null]], "[1][3]"));

// 'Software Engineer'
// 'Cruz'
// '0'
// null
// undefined
