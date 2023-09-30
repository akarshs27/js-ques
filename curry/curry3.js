function sum() {
    re
}





const curriedSum = curry(sum);
console.log(curriedSum(1,2,3,4,5));
console.log(curriedSum(1),(2,3),(4,5));
console.log(curriedSum(1)(2)(3)(4)(5));