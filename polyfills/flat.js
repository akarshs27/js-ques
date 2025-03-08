const arr1 = [1,2,[3,4,[5,6]]];
console.log(arr1.flat(3));

function myFlat(arr, depth = 1) {
  let result = [];
  arr.forEach((each) => {
    if (Array.isArray(each) && depth > 1) {
      result.push(...myFlat(each, depth - 1));
    } else {
      result.push(each);
    }
  });
  return result;
}

console.log(myFlat(arr1, 3));