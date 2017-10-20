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
    function checkLeft(tree) {
        let result = true;
        let current = tree.value;

        while (current.left) {
            if (current.left > value) {
                result = false;
            }
            current = current.left;
        }
        return result;
    }

    function checkRight(tree) {
        let result = true;
        let current = tree.value;

        while (current.right) {
            if (current.right < value) {
                result = false;
            }
            current = current.right;
        }
        return result;
    }

    function breadthFirstSearch(tree) {
        let curr = [];
        curr[0] = tree;
      
        while(curr.length > 0) {
          let next = [];
      
          curr.forEach(element => {
            if (checkLeft(element) === false) {
                return false;
            } else if (checkRight(element) === false) {
                return false;
            }
            if (element.left) next.push(element.left);
            if (element.right) next.push(element.right);
          });
          curr = next;
        }
        return true;
      }
      return breadthFirstSearch();
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
