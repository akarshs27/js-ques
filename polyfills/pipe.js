//   function1(function2(function3(function4(args))))
//   pipe(function1,function2,function3)(args)


const pipe = (...functions) => (args) => functions.reduce((arg, func) => func(arg), args);

const sum = (...arr) => arr.flat(1).reduce((x , y) => x + y);

const square = (val) => val * val;

console.log(pipe(sum, square)([3,5]));