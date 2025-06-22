// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

var longestPalindromicSubstrings = function (s) {
  let longest = "";
  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i;
    // odd
    let oddPal = helper(left, right);
    // even
    let evenPal = helper(left, right + 1);

    let longestPal = oddPal.length > evenPal.length ? oddPal : evenPal;

    if (longestPal.length > longest) {
      longest = longestPal;
    }
  }

  function helper(left, right) {
    while (left >= 0 && right < s.length - 1 && s[left] === s[right]) {
      left++;
      right--;
    }
  }

  return longest;
};
