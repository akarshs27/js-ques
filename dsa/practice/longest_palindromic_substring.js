// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

var longestPalindromicSubstrings = function (s) {
  let longest = "";

  for (let i = 0; i < s.length; i++) {
    // Try to expand around a single character (odd-length palindrome)
    let oddPal = expandAroundCenter(i, i);

    // Try to expand around two characters (even-length palindrome)
    let evenPal = expandAroundCenter(i, i + 1);

    // Pick the longer of the two
    let longerPal = oddPal.length > evenPal.length ? oddPal : evenPal;

    // Update longest if needed
    if (longerPal.length > longest.length) {
      longest = longerPal;
    }
  }

  return longest;

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }

    // Slice the palindrome from the last valid left+1 to right (not including right)
    return s.slice(left + 1, right);
  }
};
