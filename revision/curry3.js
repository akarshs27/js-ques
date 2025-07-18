const sum = (a, b, c, d) => {
  return a + b + c + d;
};

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3, 4));
console.log(curriedSum(1)(2, 3)(4));
console.log(curriedSum(1)(2)(3)(4));

function curry(fn) {
  function helper(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      function temp(...args2) {
        return helper(...args, ...args2);
      }
      return temp;
    }
  }

  return helper;
}
