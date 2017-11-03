/**
 * Write a function to see if a binary tree is "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */
// function height(tree) {
//   if (tree === null) {
//       return 0;
//   }
//   return 1 + Math.max(height(tree.left), height(tree.right));
// }

// function superbalanced(tree) {
//   if (tree === null) {
// return true;
//   }
//   return Math.abs(height(tree.left) - height(tree.right)) <= 
//   1 && superbalanced(tree.left) && superbalanced(tree.right);
// }

// OR


function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};

//Iterative

function Superbalanced(node) {
let maxDepth = null;
let current = {node: node, depth:0}
let queue = [];
while (current) {
  if (current.node.left) {
    queue.push({node: current.node.left, depth: current.depth+1});
  }
  if (current.node.right) {
    queue.push({node: current.node.right, depth: current.depth+1})
  }
  if (!current.node.left && !current.node.right) {
    if (!maxDepth) {
      maxDepth = current.depth;
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

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
