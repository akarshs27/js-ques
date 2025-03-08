function curry() {
  let total = 0;

  return function (num = 0) {
    total = total + num;
    return total;
  };
}

const sum = curry();
console.log(sum(1)); // 1
console.log(sum(2)); // 3
console.log(sum(3)); // 6
console.log(sum(4)); // 10
