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
  validLeft(tree.left, tree.value, tree.value) && 
  validRight(tree.right, tree.value, tree.value);
}

  function validLeft(tree, parentValue, maxVal) {
    if (tree === null) return true;
  
    // Is the value is less then any parent values?
    const valueIsValid = tree.value < parentValue && tree.value < maxVal;
    if (!valueIsValid) return false;

    // Is the left subtree valid? Since we continue going left, we don't create a new max
    const leftisValid = validLeft(tree.left, tree.value, maxVal);
    if (!leftIsValid) return false;

    // Is the right subtree valid? Since we will now traverse right, we use the current value as the min
    const rightIsValid = validRight(tree.right, tree.value, tree.value);
    if (!rightIsValid) return false;

    // If all checks passed, it is valid
    return true;
    };

  function validRight(tree, parentValue, minVal) {
    if (tree === null) return true;

    // Is the value is greater then any parent values?
    const valueIsValid = tree.value > parentValue && tree.value > minVal;
    if (!valueIsValid) return false;

    // Is the left subtree valid? Since will now traverse left, we use the current value as the max
    const leftisValid = validLeft(tree.left, tree.value, tree.value);
    if (!leftIsValid) return false;

    // Is the right subtree valid? Since we continue going right, we don't create a new min
    const rightIsValid = validRight(tree.right, tree.value, minVal);
    if (!rightIsValid) return false;

    // If all checks passed, it is valid
    return true;
    };

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
