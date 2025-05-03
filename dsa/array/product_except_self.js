// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

function productExceptSelf(arr) {
  let forward = [];
  let start = 1;
  let backward = [];
  let start2 = 1;
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    forward.push(start);
    start = start * arr[i];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    backward.unshift(start2);
    start2 = start2 * arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    result.push(forward[i] * backward[i]);
  }

  return result;
}

console.log(productExceptSelf([1, 2, 3, 4]));

function productExceptSelf(arr) {
  let forward = [];
  let start = 1;
  let start2 = 1;

  for (let i = 0; i < arr.length; i++) {
    forward.push(start);
    start = start * arr[i];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    forward[i] = start2 * forward[i];
    start2 = start2 * arr[i];
  }

  return forward;
}
