// kth largest
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4

function klargest(nums, k) {
  let minVal = Infinity;
  let maxVal = -Infinity;

  for (let num of nums) {
    minVal = Math.min(minVal, num);
    maxVal = Math.max(maxVal, num);
  }

  console.log("minVal", minVal);
  console.log("maxVal", maxVal);

  let arr = new Array(maxVal - minVal + 1).fill(0);
  console.log("arr 1", arr);

  for (let num of nums) {
    arr[num - minVal]++;
    console.log("arr 2", arr);
  }

  console.log("arr 3", arr);

  let count = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    count = count + arr[i];
    if (count >= k) return i + minVal;
  }
}

console.log(klargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));

// 🧠 Goal:
// Find the 4th largest number in the array.

// So if we sort the array:

// csharp
// Copy
// Edit
// [1,2,2,3,3,4,5,5,6]
//         ↑
// The 4th largest is 4

// ✅ Step-by-Step Breakdown of Your Code
// 1. Find min and max values
// let minVal = Infinity;
// let maxVal = -Infinity;

// for (let num of nums) {
//   minVal = Math.min(minVal, num);
//   maxVal = Math.max(maxVal, num);
// }
// After this loop:

// minVal = 1
// maxVal = 6
// You're doing this to create a frequency array big enough to hold all values between min and max.

// 2. Initialize frequency array
// let arr = new Array(maxVal - minVal + 1).fill(0);
// That’s:

// new Array(6 - 1 + 1).fill(0) → new Array(6).fill(0)
// This gives:

// arr = [0, 0, 0, 0, 0, 0]
// // index 0 → represents 1
// // index 1 → represents 2
// // index 2 → represents 3
// // index 3 → represents 4
// // index 4 → represents 5
// // index 5 → represents 6
// 3. Populate frequency array

// for (let num of nums) {
//   arr[num - minVal]++;
// }
// This counts the frequency of each number:

// 1 → index 0

// 2 → index 1

// 3 → index 2

// 4 → index 3

// 5 → index 4

// 6 → index 5

// Final arr:

// [1, 2, 2, 1, 2, 1]
// Meaning:

// 1 appears once

// 2 appears twice

// 3 appears twice

// 4 appears once

// 5 appears twice

// 6 appears once

// 4. Find the Kth largest

// let count = 0;
// for (let i = arr.length - 1; i >= 0; i--) {
//   count = count + arr[i];
//   if (count >= k) return i + minVal;
// }
// You iterate from the end (highest number) toward the smallest, counting how many elements you’ve seen:

// i = 5 (value = 6): count = 1

// i = 4 (value = 5): count = 3

// i = 3 (value = 4): count = 4 → return 4

// ✔️ Correct! The 4th largest number is 4.

// ✅ Time and Space Complexity
// Time: O(n + r)

// n = number of elements in nums

// r = range between min and max (i.e., max - min)

// Space: O(r)

// You create a frequency array of size max - min + 1
