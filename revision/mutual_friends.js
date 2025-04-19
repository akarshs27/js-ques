// Input:
const mapping = {
  a: ["b", "c"],
  b: ["d", "g"],
  d: ["p", "q"],
  l: ["x", "y"],
};

// console.log(friends(mapping, 'a'));

// Output:
// ["b","c","d","g","p","q"]

// a -> [b, c]
// b -> [d, g]
// d -> [p, q]

function friends(obj, key) {
  let friendList = obj[key];
  if (friendList) {
    const output = [...friendList];
    for (let val of output) {
      output.push(...friends(obj, val));
    }
    return output;
  }

  return [];
}
