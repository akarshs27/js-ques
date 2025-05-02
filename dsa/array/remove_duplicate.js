const arr = ["1", "2", "3", "4", "2", "3"];
const arr2 = [1, 2, 2, 3, 4, 4, 4, 5, 5];

function removeDuplicate(arr) {
  return arr.filter((each, index) => arr.indexOf(each) === index);
}

console.log(removeDuplicate(arr));
console.log(removeDuplicate(arr2));
