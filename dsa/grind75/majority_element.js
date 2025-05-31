// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

function majorityElement(nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const freq = (map.get(nums[i]) ?? 0) + 1;
    map.set(nums[i], freq);
    if (freq > nums.length / 2) return nums[i];
  }

  return nums[0];
}

// Boore Moore algorithm

function majorityElement(nums) {
  let result = nums[0];
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) result = nums[i];

    if (nums[i] === result) count++;
    else count--;
  }

  return result;
}
