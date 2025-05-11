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

function arrayValuesEqual(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

function findAnagrams(s, p) {
  const sArr = new Array(26).fill(0);
  const pArr = new Array(26).fill(0);
  const result = [];

  for (let i = 0; i < p.length; i++) {
    let index = p.charCodeAt(i) % 26;
    pArr[index]++;
  }

  for (let i = 0; i < s.length; i++) {
    let index = s.charCodeAt(i) % 26;
    sArr[index]++;

    if (i > p.length - 1) {
      let headIndex = s.charCodeAt(i - p.length) % 26;
      sArr[headIndex]--;
    }

    if (i >= p.length - 1) {
      if (arrayValuesEqual(sArr, pArr)) {
        result.push(i - (p.length - 1));
      }
    }
  }
  return result;
}

console.log(findAnagrams("cbaebabacd", "abc"));
