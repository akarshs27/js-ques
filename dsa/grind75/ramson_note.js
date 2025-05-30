// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

function ransomNote(ransomNote, magazine) {
  let obj = {};

  for (let key of magazine) {
    obj[key] = obj[key] ? obj[key] + 1 : 1;
  }

  for (let key of ransomNote) {
    if (!obj[key] || obj[key] === 0) {
      return false;
    }
    obj[key] = obj[key] - 1;
  }

  return true;
}
