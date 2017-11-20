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

  this.add = (val) => {
    if (val > this.value) {
      this.right ? this.right.add(val) : this.right = new BinaryTree(val);
    }
    if (val < this.value) {
        this.left ? this.left.add(val): this.left = new BinaryTree(val);
    }
  }

  this.depthFirstPre = (callback) => {
    callback(this.value);
    if (this.left) this.left.depthFirstPre(callback);
    if (this.right) this.right.depthFirstPre(callback);
  }

  this.getLevel = (val, level) => {
    level = level || 0;
    if (this.value === val) return level;
    if (val > this.value) {
      return this.right ? this.right.getLevel(val, level + 1) : null;
    }
    else {
      return this.left ? this.left.getLevel(val, level + 1) : null;
    }
  }

  this.height = (tree) => {
    let current = tree;
    let max = 0;
    const getMax = (val) => {
      let depth = current.getLevel(val);
      if (depth > max) max = depth;
    }
    current.depthFirstPre(getMax);
    return max;
  }
}

function superbalanced(tree) {
  let leftHeight = 0;
  let rightHeight = 0;
  let allBalanced = true;
  if (tree.left) {
    leftHeight = tree.height(tree.left) + 1;
    if (!superbalanced(tree.left)) allBalanced = false;
  }
  if (tree.right) {
    rightHeight = tree.height(tree.right) + 1;
    if (!superbalanced(tree.right)) allBalanced = false;
  }

  return allBalanced && Math.abs(leftHeight - rightHeight) < 2;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
