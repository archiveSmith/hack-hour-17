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

BinaryTree.prototype.add = function(value) {
  let currentNode = this;
  let node;

  while (currentNode) {
    if (value < currentNode.value) {
      if (currentNode.left) {
        currentNode = currentNode.left;
      } else {
        node = new BinaryTree(value);
        currentNode.left = node;
        break;
      }
    } else {
      if (currentNode.right) {
        currentNode = currentNode.right;
      } else {
        node = new BinaryTree(value);
        currentNode.right = node;
        break;
      }
    }
  }
};


function superbalanced(tree) {
  let currentNode = tree;

  if (!tree.left && !tree.right) {
    return true;
  }

  
  
  let countLeft = 0;
  let countRight = 0;


  console.log(currentNode);



}

// My tests
let tree = new BinaryTree(8);
tree.add(5);
tree.add(3);
tree.add(6);
tree.add(10);
// console.log(tree);
// console.log(tree.contains(3));
// console.log(tree.contains(7));

console.log(superbalanced(tree));


module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
