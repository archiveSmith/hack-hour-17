/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function getHeight(tree) {
  if (!tree) return 0;
  return (1 + Math.max(getHeight(tree.left), getHeight(tree.right)));
}

function superbalanced(tree) {
  if (!tree) return true;
  const heightDiff = getHeight(tree.left) - getHeight(tree.right);
  if (Math.abs(heightDiff) > 1) {
    return false;
  }
  return superbalanced(tree.left) && superbalanced(tree.right);
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};

// let test = new BinaryTree(3);
// test.left = new BinaryTree(2);
// test.right = new BinaryTree(4);
// test.right.right = new BinaryTree(5);
// test.right.right.right = new BinaryTree(6);
// console.log(getHeight(test));
