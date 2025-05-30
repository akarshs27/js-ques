// * Definition for a binary tree node.
// * function TreeNode(val, left, right) {
// *     this.val = (val===undefined ? 0 : val)
// *     this.left = (left===undefined ? null : left)
// *     this.right = (right===undefined ? null : right)
// * }
// */
// /**
// * @param {TreeNode} root
// * @return {number}
// */

// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

//         1
//     2        3
//  4     5
        
var diameterOfBinaryTree = function(root) {
   let maxDistance = 0;
   function traverse(node) {
        if(!node) return 0;
        let left = traverse(node.left);
        let right = traverse(node.right);
        maxDistance  = Math.max(left + right, maxDistance);
        return Math.max(left,right) + 1;
   }
   traverse(root);
   return maxDistance;
};