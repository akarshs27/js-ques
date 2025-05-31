// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome.

// Example 1:
// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

// Example 2:
// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

function longestPalindrom(s) {
  let map = new Map();
  let count = 0;

  for (let key of s) {
    if (map.has(key)) {
      let keyValue = map.get(key);
      map.set(key, keyValue + 1);
      if ((keyValue + 1) % 2 === 0) {
        count = count + 2;
      }
    } else {
      map.set(key, 1);
    }
  }

  return s.length > count ? count + 1 : count;
}
