// https://leetcode.com/problems/binary-tree-inorder-traversal/

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

function inorderTraversal(root: TreeNode | null): number[] {
  const values: number[] = [];

  if (root) {
    addValInorderTraversal(root);
  }

  function addValInorderTraversal(root: TreeNode) {
    if (root.left) {
      addValInorderTraversal(root.left);
    }

    values.push(root.val);

    if (root.right) {
      addValInorderTraversal(root.right);
    }
  }

  return values;
};

// Runtime: 136 ms, faster than 5.68% of TypeScript online submissions for Binary Tree Inorder Traversal.
// Memory Usage: 44.6 MB, less than 41.48% of TypeScript online submissions for Binary Tree Inorder Traversal.


// 다른이 풀이

function inorderTraversal2(root: TreeNode | null): number[] {
  const stack: TreeNode[] = [];
  const res: number[] = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      const newRoot = stack.pop();
      root = newRoot ? newRoot : null;

      if (root) {
        res.push(root.val);
        root = root.right;
      }
    }
  }

  return res;
}

// Runtime: 123 ms, faster than 12.62% of TypeScript online submissions for Binary Tree Inorder Traversal.
// Memory Usage: 44.6 MB, less than 35.17% of TypeScript online submissions for Binary Tree Inorder Traversal.
