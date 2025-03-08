function sum(num1) {
  let currentSum = num1;
  function addNext(...args) {
    currentSum += args.reduce((acc, val) => acc + val, 0);
    return addNext;
  }
  addNext.valueOf = function () {
    return currentSum;
  };
  return addNext;
}

console.log(sum(1)(2, 3, 4)(5)); // 15

// Variation 2
function sum(num) {
  const helper = (num2) => {
    return sum(num2 + num);
  };
  helper.toString = () => num;
  return helper;
}
console.log(sum(1)(3)(6) == "10"); // true
