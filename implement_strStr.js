// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Input: haystack = "leetcode", needle = "leetcode"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

function implementStr(haystack, needle) {
    if(needle.length > haystack.length) return -1;
    
    for(let i = 0 ; i< haystack.length - needle.length; i++) {
        if(needle === haystack.substring(i, i + needle.length)) {
            return i;
        }
    }
    return -1;
}

console.log(implementStr('sadbutsad', 'sad'));
console.log(implementStr('leetcode', 'leeto'));