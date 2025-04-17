// sum(1, 2, 3, 4)();
// sum(1)(2)(3)(4)();
// sum(1, 2)(3, 4)();
// sum(1, 2, 3)(4)();
// sum(1)(2, 3, 4)();
// sum();

//10 10 10 10 10 0

const sum = (...args) => {
  let storage = [...args];

  if (args.length === 0) {
    return 0;
  }

  const temp = (...args2) => {
    storage.push(...args2);
    if (args2.length === 0) {
      return storage.reduce((a, b) => a + b, 0);
    } else {
      return temp;
    }
  };

  return temp;
};

console.log(sum(1, 2, 3, 4)());
console.log(sum(1)(2)(3)(4)());
console.log(sum(1, 2)(3, 4)());
console.log(sum(1, 2, 3)(4)());
console.log(sum(1)(2, 3, 4)());
console.log(sum());
