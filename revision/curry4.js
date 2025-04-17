// console.log(add(1,2,3).value() === 6); true
// console.log(add(1,2)(3).value() === 6); true
// console.log(add(1)(2)(3).value() === 7); false
// console.log(add(1)(2) + 4) 7

function add(...args) {
  let storage = [...args];

  function helper(...args2) {
    storage.push(...args2);
    return helper;
  }

  helper.valueOf = () => storage.reduce((a, b) => a + b, 0);

  helper.value = helper.valueOf;

  return helper;
}

console.log(add(1, 2, 3).value() === 6);
console.log(add(1, 2)(3).value() === 6);
console.log(add(1)(2)(3).value() === 7);
console.log(add(1)(2) + 4);
