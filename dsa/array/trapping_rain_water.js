//  Trapping Rain Water
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9

function trappingRainWater(height) {
  let totalWater = 0;

  let leftMax = [];
  let rightMax = [];

  leftMax[0] = height[0];
  for (let i = 1; i < height.length; i++) {
    leftMax[i] = Math.max(height[i], leftMax[i - 1]);
  }

  rightMax[height.length - 1] = height[height.length - 1];
  for (let i = height.length - 2; i >= 0; i--) {
    rightMax[i] = Math.max(height[i], rightMax[i + 1]);
  }

  for (let i = 1; i < height.length; i++) {
    console.log(
      rightMax[i],
      leftMax[i],
      rightMax[i] - leftMax[i],
      Math.min(height[i], rightMax[i] - leftMax[i])
    );
    totalWater = totalWater + Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  // height -   [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
  // leftArr -  [0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3];
  // rightArr - [3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1];
  //  0  0  1  0  1  2  1  0  0  1  0  0
  return totalWater;
}

console.log(trappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
