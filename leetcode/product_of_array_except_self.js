// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// https://www.youtube.com/watch?v=vtgG0XFNUNM

function productOfArray(nums) {
  let forwardArr = [];
  let start = 1;
  let backwardArr = [];
  let end = 1;
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    forwardArr.push(start);
    start = start * nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    backwardArr.unshift(end);
    end = end * nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    result.push(forwardArr[i] * backwardArr[i]);
  }

  return result;
}

console.log(productOfArray([1, 2, 3, 4])); //  [24,12,8,6]
console.log(productOfArray([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
