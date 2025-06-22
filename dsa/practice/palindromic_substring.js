// Example 1:
// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".

// Example 2:
// Input: s = "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

var countSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i;
    // odd
    helper(left, right);
    // even
    helper(left, right + 1);
  }

  function helper(left, right) {
    while (left >= 0 && right < s.length - 1 && s[left] === s[right]) {
      count++;
      left++;
      right--;
    }
  }

  return count;
};
