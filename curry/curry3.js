function curry(fn) {
  function helper(...args1) {
    if (args1.length >= fn.length) {
      return fn(...args1);
    } else {
      return function temp(...args2) {
        return helper(...args1, ...args2);
      };
    }
  }

  return helper;
}

function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}

const curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3, 4, 5)); // 15
console.log(curriedSum(1)(2, 3, 4)(5)); // 15
console.log(curriedSum(1)(2)(3)(4)(5)); // 15

// Variation 2

function curry(func) {
  return function helper(...args) {
    if (args.length >= func.length) {
      return func(...args);
    }

    return function (...newArgs) {
      return helper(...args, ...newArgs);
    };
  };
}

let join = (a, b, c, d) => {
  return `${a}_${b}_${c}_${d}`;
};

let curriedJoin = curry(join);

console.log(curriedJoin(13)(42)(3)(24));
