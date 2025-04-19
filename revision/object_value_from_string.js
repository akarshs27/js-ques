console.log(get({ developer: "Software Engineer" }, "developer")); // Software Engineer
console.log(
  get(
    { developer: { firstName: "Tom", lastName: "Cruz" } },
    "developer.lastName"
  )
); // Cruz
console.log(get([{ developer: "Tom" }, { count: [0, 1] }], "[1].count[0]")); // 0
console.log(get([{ developer: "Tom" }, [0, null]], "[1][1]")); // null
console.log(get([{ developer: "Tom" }, [0, null]], "[1][3]")); // undefined

function get(obj, path) {
  path = path.replaceAll("[", ".");
  path = path.replaceAll("]", "");
  const keys = path.split(".").filter(Boolean);

  let current = obj;

  for (let key of keys) {
    current = current[key];
    if (current === undefined) {
      return undefined;
    }
  }

  return current;
}
