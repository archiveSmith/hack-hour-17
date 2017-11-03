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

/*BinaryTree.prototype.add = function(value) {
  if (this.value === value) {
    return;
  }
  if (value > this.value) {
    if (this.right === null) {
      this.right = new BinaryTree(value);
    } else {
      this.right.add(value);
    }
  } 
  if (value < this.value) {
    if(this.left === null) {
      this.left = new BinaryTree(value);
    } else {
      this.left.add(value);
    }
  } 
};
*/
function countHeight(tree) {
  if (tree === null) {
    return 0;
  }
  return 1 + Math.max( countHeight(tree.left), countHeight(tree.right) );
}


function superbalanced(tree) {
  if (tree.left === null && tree.right === null) {
    return true;
  }
  const leftHeight = countHeight(tree.left);
  const rightHeight = countHeight(tree.right);
  return Math.abs(leftHeight - rightHeight) < 1;
}


/*

const bt = new BinaryTree(10);
                            bt.add(30);
                        bt.add(25);
                    bt.add(23);
                                    bt.add(35);
                                      bt.add(37);
                                        bt.add(39);
    bt.add(5);                                    
bt.add(3);
          bt.add(7);*/

// console.log(superbalanced(bt));.


module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
