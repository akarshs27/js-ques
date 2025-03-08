// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Input: strs = [""]
// Output: [[""]]

// Input: strs = ["a"]
// Output: [["a"]]

function groupAnagrams(arr) {
    let result = {};
    for (let ar of arr) {
      let word = ar.split("").sort().join("");
      if (result[word]) {
        result[word].push(ar);
      } else {
        result[word] = [ar];
      }
    }
  
    return Object.values(result);
  }
  
  console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));