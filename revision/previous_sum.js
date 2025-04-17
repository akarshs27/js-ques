// sum(5); // 5
// sum(3); // 8
// sum(4); // 12
// sum(0); // 12

function curry() {
  let sum = 0;
  return (value) => {
    sum = sum + value;
    return sum;
  };
}

const sum = curry();

console.log(sum(5));
console.log(sum(3));
console.log(sum(4));
console.log(sum(0));
