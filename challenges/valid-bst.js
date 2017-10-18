/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */


class BinaryTree {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

const validBST = (tree) => {
  if(!tree) return true;
  let left = tree.left ? false : true;
  let right = tree.right ? false : true;
  if((tree.left && tree.value > tree.left.value)) left = true;
  if((tree.right && tree.value < tree.right.value)) right = true;
  if(!left || !right) return false;
  else return (validBST(tree.left) && validBST(tree.right));
}

// let newTree = new BinaryTree(8);
// newTree.left = new BinaryTree(3);
// newTree.left.left = new BinaryTree(1);
// newTree.left.right = new BinaryTree(6);
// newTree.right = new BinaryTree(10);
// newTree.right.right = new BinaryTree(12);
// newTree.right.right.left = new BinaryTree(11);
// newTree.right.left = new BinaryTree(9);


module.exports = { BinaryTree: BinaryTree, validBST: validBST };
