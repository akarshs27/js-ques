// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Input: s = "anagram", t = "nagaram"
// Output: true

// Input: s = "rat", t = "rat"
// Output: false

function anagram(str1, str2) {
    let obj1 = {};
    let obj2= {};

    for(let key of str1) {
        obj1[key] = obj1[key] ? obj1[key] + 1 : 1;
    }
    for(let key of str2) {
        obj2[key] = obj2[key] ? obj2[key] + 1 : 1;
    }
    console.log(obj1);
    console.log(obj2);

    for(let key in obj1) {
        if(!(key in obj2)) {
            return false;
        }
        if(!(obj1[key] === obj2[key])) {
            return false;
        }
    }

    return true;
}

console.log(anagram('anagram', 'nagaram'));