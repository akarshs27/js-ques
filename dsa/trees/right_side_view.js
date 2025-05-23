// Binary Tree Right Side View
// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Example 1:
// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]

var rightSideView = function (root) {
  if (!root) return [];

  let queue = [root];
  let result = [];

  while (queue.length) {
    let length = queue.length;
    result.push(queue[length - 1].val);

    while (length--) {
      let current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }

  return result;
};
