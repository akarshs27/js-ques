var maxDepth = function (root) {
  function maxHeight(node, sum) {
    if (node === null) {
      return sum;
    }

    return Math.max(
      maxHeight(node.left, sum + 1),
      maxHeight(node.right, sum + 1)
    );
  }
  return maxHeight(root, 0);
};

var maxDepth = function (root) {
  if (root === null) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
