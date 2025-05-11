// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

function groupAnagram(arr) {
  if (arr.length === 0) return [];
  let result = {};

  for (let val of arr) {
    let newVal = val.split("").sort().join("");
    if (result[newVal]) {
      result[newVal].push(val);
    } else {
      result[newVal] = [val];
    }
  }

  return Object.values(result);
}

console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));
