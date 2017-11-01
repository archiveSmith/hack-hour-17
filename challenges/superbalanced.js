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

// let bt = new BinaryTree(10);
// bt.left = new BinaryTree(6);
// bt.left.left = new BinaryTree(3);
// bt.left.right = new BinaryTree(8);
// bt.left.right.left = new BinaryTree(7);
// bt.right = new BinaryTree(12);
// bt.right.right = new BinaryTree(13);

// console.log('true ->', superbalanced(bt));

// let bt2 = new BinaryTree(20);
// bt2.left = new BinaryTree(15);
// bt2.left.left = new BinaryTree(10);
// bt2.left.left.left = new BinaryTree(8);
// bt2.left.left.right = new BinaryTree(12);
// bt2.left.left.right.left = new BinaryTree(11);
// bt2.left.right = new BinaryTree(16);
// bt2.left.right.right = new BinaryTree(18);
// bt2.left.right.right.left = new BinaryTree(17);
// bt2.right = new BinaryTree(25);
// bt2.right.right = new BinaryTree(28);
// bt2.right.left = new BinaryTree(23);

// console.log('false ->', superbalanced(bt2));


module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
