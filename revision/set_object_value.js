// Set object value at the string path
const object = { a: [{ b: { c: 3 } }] };

// set(object, "a[0].b.c", 4);
// console.log(object.a[0].b.c);
// 4

// set(object, ["x", "0", "y", "z"], 5);
// console.log(object.x[0].y.z);
// 5

function set(obj, path, value) {
  if (!Array.isArray(path)) {
    path = path.replace("[", ".");
    path = path.replace("]", "");
    path = path.split(".");
  }

  console.log("path", path);

  let newObj = obj;

  for (let i = 0; i < path.length; i++) {
    if (i === path.length - 1) {
      newObj[path[i]] = value;
    } else {
      if (newObj[path[i]] === undefined) {
        newObj[path[i]] = isNaN(path[i + 1]) ? {} : [];
      }
      newObj = newObj[path[i]];
    }
  }

  return newObj;
}

// set(object, "a[0].b.c", 4);
// console.log(object.a[0].b.c);

set(object, ["x", "0", "y", "z"], 5);
console.log(object.x[0].y.z);
