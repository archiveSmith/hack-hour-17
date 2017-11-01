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


function superbalanced(tree) {
  if(!tree || !tree.value || (!tree.left && !tree.right)) return true;

  const countTree = tree => {
    if(!tree.left && !tree.right) return 0;
    if(!tree.left && tree.right) return 1 + countTree(tree.right);
    if(tree.left && !tree.right) return 1 + countTree(tree.left);
    return 1 + countTree(tree.left) + countTree(tree.right);

  }
  
  let leftLvls = tree.left ? countTree(tree.left) : 0;
  let rightLvls = tree.right ? countTree(tree.right) : 0;

  return Math.abs(leftLvls - rightLvls) <= 1;

}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
