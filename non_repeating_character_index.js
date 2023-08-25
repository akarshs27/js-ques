// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Input: s = "leetcode"
// Output: 0

// Input: s = "loveleetcode"
// Output: 2

// Input: s = "aabb"
// Output: -1

function firstNonRepeatingIndex(str) {
 let obj = {};

 for(let key of str) {
    obj[key] = obj[key] ? obj[key] + 1 : 1;
 }

 for(let key in obj) {
    if(obj[key] === 1) {
        return str.indexOf(key);
    }
 }
 return -1;
}

console.log(firstNonRepeatingIndex('leetcode'));
console.log(firstNonRepeatingIndex('loveleetcode'));
console.log(firstNonRepeatingIndex('aabb'));