// https://www.youtube.com/watch?v=bJmuCY37mss

const a = {
  name: "Akarsh",
  age: 25,
  hobbies: ["Anime", "TT", "Gaming"],
};

const b = deepClone(a);
b.name = "Test";

function deepClone(input) {
  if (input === null || typeof input !== "object") {
    return input;
  }

  let initialValue = Array.isArray(input) ? [] : {};

  return Object.keys(input).reduce((acc, key) => {
    acc[key] = deepClone(input[key]);
    return acc;
  }, initialValue);
}

console.log(b, a);
