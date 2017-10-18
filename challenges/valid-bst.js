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
    let node = tree;

    function innerFunc(node) {
    if (node.left && node.right) {
        if (node.left.value > node.right.value) return false;
        console.log(node.left.value, node.right.value);
        innerFunc(node.left);
        innerFunc(node.right);
    }
    }
    innerFunc(node);

    return true;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
