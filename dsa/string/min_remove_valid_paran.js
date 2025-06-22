// . Minimum Remove to Make Valid Parentheses
// Example 1:
// Input: s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

// Example 2:
// Input: s = "a)b(c)d"
// Output: "ab(c)d"

// Example 3:
// Input: s = "))(("
// Output: ""
// Explanation: An empty string is also valid.

function minRemoveValidParanthesis(s) {
  const arr = s.split("");

  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      stack.push(i);
    } else if (arr[i] === ")" && stack.length) {
      stack.pop();
    } else if (arr[i] === ")") {
      arr[i] = "";
    }
  }

  for (let j = 0; j < stack.length; j++) {
    arr[stack[j]] = "";
  }

  return arr.join("");
}

console.log(minRemoveValidParanthesis("lee(t(c)o)de)"));
