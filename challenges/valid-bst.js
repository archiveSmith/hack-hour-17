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

function validBST(tree) {
  // if(!tree)
  //     return true;
  // if(tree.left !== null && tree.left.value > tree.value)
  //     return false;
  // if(tree.right !== null && tree.right.value < tree.value)
  //     return false;

  // return (validBST(tree.left) && validBST(tree.right));

  // take 2, total BST
  let largest = -Infinity;
  function traverse(tree) {

    if (tree.left)
      if (!traverse(tree.left))
        return false;

    if (tree.value < largest)
      return false;
    else {
      largest = tree.value;
    }

    if (tree.right)
      if (!traverse(tree.right))
        return false;
    
    return true;
  }

  return traverse(tree)
}

// let a = new BinaryTree(1);
// let b = new BinaryTree(2);
// let c = new BinaryTree(3);
// let d = new BinaryTree(4);
// let e = new BinaryTree(5);

// c.left = b;
// b.left = a;
// c.right = e;
// e.left = d;
// console.log(validBST(c));
// console.log(c);

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
