// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let val of str1) {
    obj1[val] = obj1[val] ? obj1[val] + 1 : 1;
  }

  for (let val of str2) {
    obj2[val] = obj2[val] ? obj2[val] + 1 : 1;
  }

  for (let key in obj1) {
    if (!(key in obj2)) return false;
    if (!(obj1[key] === obj2[key])) return false;
  }

  return true;
}

console.log(validAnagram("anagram", "nagaram"));
