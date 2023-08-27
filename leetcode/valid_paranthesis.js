// Valid Parentheses

function valid(s) {
    let obj = {
      "(": ")",
      "[": "]",
      "{": "}"
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
  
  console.log(valid("{[()]}"));
  console.log(valid("]"));
  console.log(valid("[]{}"));