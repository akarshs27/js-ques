// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

function longestCommonPrefix(arr) {
    let commonPrefix = "";
    for (let i = 0; i < arr[0].length; i++) {
      let character = arr[0][i];
      for (let j = 0; j < arr.length; j++) {
        if (arr[j][i] !== character) {
          return commonPrefix;
        }
      }
      commonPrefix = commonPrefix + character;
    }
    return commonPrefix;
  }
  
  console.log(longestCommonPrefix(["flower", "flow", "flight"]));