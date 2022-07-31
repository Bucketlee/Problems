// https://leetcode.com/problems/maximum-depth-of-binary-tree/https://leetcode.com/problems/maximum-depth-of-binary-tree/

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}


 function maxDepth(root: TreeNode | null): number {
  let max = 0;

  if (!root) {
    return max;
  }

  function checkDepth(tree: TreeNode, depth: number) {
    if (depth > max) {
      max = depth;
    }

    if (tree.left) {
      checkDepth(tree.left, depth + 1);
    }

    if (tree.right) {
      checkDepth(tree.right, depth + 1);
    }
  }

  checkDepth(root, 1);
  return max;
};

// Runtime: 139 ms, faster than 14.56% of TypeScript online submissions for Maximum Depth of Binary Tree.
// Memory Usage: 46.6 MB, less than 34.71% of TypeScript online submissions for Maximum Depth of Binary Tree.


// // javascript 풀이

// var maxDepth2 = function(root) {
//   if(root === undefined || root === null){
//       return 0;
//   }
//   return Math.max(maxDepth2(root.left), maxDepth2(root.right)) + 1;
// };
