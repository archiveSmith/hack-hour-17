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

// helper function to find the depth
// input binary tree, output number
function height(tree) {
  if (tree === null) {
    return 0;
  }
  return 1 + Math.max(height(tree.left), height(tree.right));
}
// use recursion to iterate through the tree that each leaf represents
// returns the lowest depth found from root
// Input Tree, Output Boolean
// call the helper function on both sides of the tree
// if the difference between both sides is <= 1. its balanced.


function superbalanced(tree) {
  if (tree === null) {
    return true;
  }
  return Math.abs(height(tree.left) - height(tree.right)) <=
  1 && superbalanced(tree.left) && superbalanced(tree.right);
}

// let myTree = new BinaryTree('foo');
// myTree.left = new BinaryTree('bar');
// myTree.right = new BinaryTree('baz');
// myTree.right.right = new BinaryTree('foobar');
// myTree.right.right.right = new BinaryTree('foobaz');
// myTree.left.left = new BinaryTree('foobar');
// myTree.left.left.left = new BinaryTree('foobaz');

// console.log(superbalanced(myTree))

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
