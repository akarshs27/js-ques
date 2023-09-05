// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9

//https://www.youtube.com/watch?v=fTD6Se3ZtEo

function getWaterLevels(arr) {
    let totalWater = 0;
    let leftMax = [];
    let rightMax = [];
  
    leftMax[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
      leftMax[i] = Math.max(arr[i], leftMax[i - 1]);
    }
  
    rightMax[arr.length - 1] = arr[arr.length - 1];
    for (let i = arr.length - 2; i >= 0; i--) {
      rightMax[i] = Math.max(arr[i], rightMax[i + 1]);
    }
  
    for (let i = 1; i < arr.length; i++) {
      totalWater = totalWater + Math.min(leftMax[i], rightMax[i]) - arr[i];
    }
  
    return totalWater;
  }
  
  console.log(getWaterLevels([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));