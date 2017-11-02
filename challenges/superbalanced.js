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
BinaryTree.prototype.add = function (value) {
  let current = this;
  if (value > current.value) {
    if (current.right) {
      current.right.add(value);
    } else {
      let node = new BinaryTree(value);
      current.right = node;
    }
  }
  if (value < current.value) {
    if (current.left) {
      current.left.add(value);
    } else {
      let node = new BinaryTree(value);
      current.left = node;
    }
  }
}

function superbalanced(tree) {
  let maxDepth = null;
  let current = {depth:0, tree:tree}
  console.log(current)
  let queue = [];
  while (current) {
    if (current.tree.left) {
      queue.push({tree: current.tree.left, depth: current.depth+1});
    }
    if (current.tree.right) {
      queue.push({tree: current.tree.right, depth: current.depth+1})
    }
    if (!current.tree.left && !current.tree.right) {
      if (!maxDepth) {
        maxDepth = current.depth
      } else {
        if (Math.abs(maxDepth-current.depth)>1) {
          return false;
        }
      }
    }
    current = queue.shift();
  }
  return true;
}

let tree =new BinaryTree(5)
tree.add(7)
tree.add(2)
tree.add(6)
tree.add(10)
tree.add(29)
tree.add(1)

console.log(tree)

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
