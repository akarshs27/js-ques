// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

function sortedArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  let result = [];
  let position = arr.length - 1;

  while (left <= right) {
    let leftVal = Math.pow(arr[left], 2);
    let rightVal = Math.pow(arr[right], 2);

    if (leftVal < rightVal) {
      result[position] = rightVal;
      position--;
      right--;
    } else {
      result[position] = leftVal;
      position--;
      left++;
    }
  }

  return result;
}

console.log(sortedArray([-4, -1, 0, 3, 10]));
