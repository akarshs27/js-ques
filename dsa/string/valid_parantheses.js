// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Example 4:
// Input: s = "([])"
// Output: true

function validParantheses(s) {
  let obj = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) {
      stack.push(s[i]);
    } else if (s[i] === obj[stack[stack.length - 1]]) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
}

console.log(validParantheses("()[]{}"));
