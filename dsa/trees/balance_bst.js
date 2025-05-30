var balanceBst = function (root) {
  let arr = [];
  inorder(root, arr);
  return buildTree(arr);
};

function inorder(root, arr) {
  if (!root) return null;
  inorder(root.left, arr);
  arr.push(root.val);
  inorder(root.right, arr);
}

function buildTree(arr) {
  if (arr.length === 0) return null;
  let mid = Math.floor(arr.length - 1);

  let head = new TreeNode(arr[mid]);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid + 1);

  head.left = buildTree(left);
  head.right = buildTree(right);

  return head;
}
