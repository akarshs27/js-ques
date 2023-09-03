//   function1(function2(function3(function4(args))))
//   compose(function3,function2,function1)(args)


const compose = (...functions) => (args) => functions.reduceRight((arg, func) => func(arg), args);

const sum = (...arr) => arr.flat(1).reduce((x , y) => x + y);

const square = (val) => val * val;

console.log(compose(square, sum)([4,5]));
