// https://leetcode.com/problems/symmetric-tree/

class TreeNode101 {
  val: number
  left: TreeNode101 | null
  right: TreeNode101 | null
  constructor(val?: number, left?: TreeNode101 | null, right?: TreeNode101 | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

function isSymmetric(root: TreeNode101 | null): boolean {
  if (!root) {
    return true;
  }

  const left: (number | null)[] = [];
  const right: (number | null)[] = [];

  function addTreeValueConsideringDirection(tree: TreeNode101, isLeft: boolean) {
    if (isLeft) {
      left.push(tree.val);
      tree.left ? addTreeValueConsideringDirection(tree.left, true) : left.push(null);
      tree.right ? addTreeValueConsideringDirection(tree.right, true) : left.push(null);
    } else {
      right.push(tree.val);
      tree.right ? addTreeValueConsideringDirection(tree.right, false) : right.push(null);
      tree.left ? addTreeValueConsideringDirection(tree.left, false) : right.push(null);
    }
  }

  root.left ? addTreeValueConsideringDirection(root.left, true) : left.push(null);
  root.right ? addTreeValueConsideringDirection(root.right, false) : right.push(null);

  for (let i = 0; i < left.length; i += 1) {
    if (left[i] !== right[i]) {
      return false;
    }
  }

  return true;
};

// Runtime: 132 ms, faster than 22.63% of TypeScript online submissions for Symmetric Tree.
// Memory Usage: 45 MB, less than 76.64% of TypeScript online submissions for Symmetric Tree.


// 다른이 풀이

function isSymmetric1(root: TreeNode101 | null): boolean {
  if (root == null) return true;

  return symmetryChecker(root.left, root.right);
};

function symmetryChecker(left: TreeNode101 | null, right: TreeNode101 | null): boolean {
  if (left == null && right == null) return true; // If both sub trees are empty
  if (left == null || right == null) return false; // If only one of the sub trees are empty
  if (left.val !== right.val) return false; // If the values dont match up

// Check both subtrees but travelled in a mirrored/symmetric fashion
// (one goes left, other goes right)  and make sure they're both symmetric
  return symmetryChecker(left.left, right.right) &&
  symmetryChecker(left.right, right.left);
}
