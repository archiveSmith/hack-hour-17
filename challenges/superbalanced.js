/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree (value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced (tree) {
  // let nextLev = [];
  // let currLev = [tree];
  // let lastLevel = false;

  // while (lastLevel === false) {
  //   for (let node of currLev) {
  //     if (node.left === null || node.right === null) {
  //       lastLevel = true;
  //     }
  //     nextLev.push(node.left);
  //     nextLev.push(node.right);
  //   }

  //   // swap current and next levels
  //   currLev = nextLev;
  //   nextLev = [];
  // }

  // // check if any are not null, if true then not super balanced
  // for (let node of currLev) {
  //   if(node !== null && (node.left !== null || node.right !== null))
  //     return false;
  // }

  // return true;

  function treeHeight (tree) {
    if (tree === null) { return 0; }

    return Math.max(treeHeight(tree.left), treeHeight(tree.right)) + 1;
  }

  if (tree === null) { return true; }
  if (superbalanced(tree.left) && superbalanced(tree.right)) {
    if (Math.abs(treeHeight(tree.left) - treeHeight(tree.right)) <= 1) { return true; }
  }

  return false;
}

// let tree = new BinaryTree(1);
// tree.left = new BinaryTree(2);
// tree.left.left = new BinaryTree(6);
// tree.left.right = new BinaryTree(10);
// tree.left.left.left = new BinaryTree(9);
// tree.right = new BinaryTree(3);
// tree.right.left = new BinaryTree(8);
// tree.right.right = new BinaryTree(4);
// tree.right.right.right = new BinaryTree(5);
// tree.right.right.right.right = new BinaryTree(7);

// console.log(superbalanced(tree));

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
