//www.youtube.com/watch?v=RBp0hVk0yDc

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// While internally implemented using similar structures, a Set does not store key-value pairs. Instead, it stores only unique values.
// const mySet = new Set();
// mySet.add(1);
// mySet.add(2);
// mySet.add(1); // Duplicate, ignored

// console.log(mySet); // Set { 1, 2 }

https: function threeSum(arr) {
  let result = new Set();
  let newArr = arr.sort((a, b) => a - b); // [-4, -1, -1, 0, 1, 2]

  for (let i = 0; i < newArr.length - 2; i++) {
    let element = newArr[i];
    let left = i + 1;
    let right = newArr.length - 1;

    while (left < right) {
      let sum = element + newArr[left] + newArr[right];
      if (sum === 0) {
        let triplet = [element, newArr[left], newArr[right]].join(",");
        result.add(triplet);
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  // { '-1,-1,2', '-1,0,1' }
  return Array.from(result).map((each) =>
    each.split(",").map((eachKey) => Number(eachKey))
  );
  //   [
  //     [-1, -1, 2],
  //     [-1, 0, 1],
  //   ];
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
