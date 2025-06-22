// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

function sortByChar(s) {
  let map = {};
  for (let key of s) {
    if (map[key]) {
      map[key].push(key);
    } else {
      map[key] = [key];
    }
  }
  const values = Object.values(map);

  const sortedValues = values.sort((a, b) => b.length - a.length);

  return sortedValues.flat().join("");
}

console.log(sortByChar("tree"));
