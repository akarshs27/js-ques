// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

function longestSubStringWithoutRepeatingCharacters(str) {
  let set = new Set();
  let longest = 0;
  let left = 0;
  let right = 0;

  while (right < str.length) {
    let letter = str[right];

    if (!set.has(letter)) {
      set.add(letter);
      right++;
      longest = Math.max(longest, set.size);
    } else {
      set.delete(str[left]);
      left++;
    }
  }
  return longest;
}

console.log(longestSubStringWithoutRepeatingCharacters("abcabcbb"));
