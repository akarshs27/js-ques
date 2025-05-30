var isValidBST = function (root, min = -Infinity, max = Infinity) {
  if (root === null) return true;
  if (root.val <= min || root.val >= max) return false;
  return (
    isValidBST(root.right, root.val, max) &&
    isValidBST(root.left, min, root.val)
  );
};
