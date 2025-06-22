// Example 1:
// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").

// Example 2:
// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

var checkInclusion = function (s1, s2) {
  let n = s1.length;
  let m = s2.length;
  let map = {};
  for (let c of s1) {
    map[c] = (map[c] ? map[c] : 0) + 1;
  }

  let l = 0,
    r = 0;
  let c = 0;
  while (r < m) {
    if (map[s2[r]] > 0) c++;
    map[s2[r]]--;
    r++;
    if (c == n) return true;
    if (r - l == n) {
      if (map[s2[l]] >= 0) c--;
      map[s2[l]]++;
      l++;
    }
  }
  return false;
};
