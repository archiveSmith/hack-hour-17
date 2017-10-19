/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */


function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}
debugger;
function validBST(tree) {

  if (!tree.value) {
    return true;
  }

  if (tree.right) {
    if (tree.right.value > tree.value) {
      validBST(tree.right);
    } else {
      return false
    }
  }

  if (tree.left) {
    if (tree.left.value > tree.value) {
      validBST(tree.left);
    } else {
      return false
    }
  }
}

let b1 = new BinaryTree(5);
let b2 = new BinaryTree(6);
let b3 = new BinaryTree(7);
let b4 = new BinaryTree(8);
let b5 = new BinaryTree(9);

b2.left = b1;
b3.left = b2

b4.right = b5
b3.right = b4;

let input = b3;
console.log(input);

console.log(validBST(input));


module.exports = {BinaryTree: BinaryTree, validBST: validBST};
