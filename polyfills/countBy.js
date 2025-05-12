// countBy([6.1, 4.2, 6.3], Math.floor);
// {'4': 1, '6': 2}
// countBy(["one", "two", "three"], "length");
//  {'3': 2, '5': 1}

function countBy(arr, iteratee) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    let value =
      typeof iteratee === "function" ? iteratee(arr[i]) : arr[i][iteratee];
    console.log("Value", arr[i], value);
    if (result[value]) {
      result[value]++;
    } else {
      result[value] = 1;
    }
  }

  return result;
}

console.log(countBy([6.1, 4.2, 6.3], Math.floor));
console.log(countBy(["one", "two", "three"], "length"));
