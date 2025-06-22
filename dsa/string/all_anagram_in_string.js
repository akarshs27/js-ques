// Example 1:
// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".

// Example 2:
// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

function findAnagrams(s, p) {
  let map = {};

  for (let key of p) {
    map[key] = (map[key] || 0) + 1;
  }

  let l = 0;
  let r = 0;
  let count = 0;
  let result = [];

  while (r < s.length) {
    console.log("map 1", map);
    if (map[s[r]] > 0) count++;
    map[s[r]]--;
    console.log("map 2", map);
    r++;
    console.log("count", count);
    if (count === p.length) result.push(l);
    if (r - l === p.length) {
      console.log("map 3", map);
      if (map[s[l]] >= 0) count--;
      map[s[l]]++;
      l++;
    }
  }

  return result;
}

console.log(findAnagrams("cbaebabacd", "abc"));
