// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

function maximumSubArray(arr) {
  let currMax = arr[0];
  let maximumSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currMax = Math.max(arr[i], arr[i] + currMax);
    maximumSum = Math.max(maximumSum, currMax);
  }

  return maximumSum;
}

console.log(maximumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
