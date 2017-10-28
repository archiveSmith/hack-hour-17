/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

// Create a Node function that takes the parameter of val
// reference this.val to val
// reference this.next to null
function Node(val) {
  this.value = val;
  this.next = null;
}


/**
 * 
 * @param {*} k, or the integer representing how close the desired Node is to the last Node
 * (1 being the last, 2 being second to last, etc)
 * @param {*} head, or the first/head with which to begin your structure
 * 
 */

 /**
  * Approach 3
  * Handle edge cases.
  * Store each node value in an array
  * While loop through linked list
  * Use length property of array to pinpoint kth to last node.
  */
// function kthToLastNode(k, head) {
//   if (!Number.isInteger(k) || k < 1 || !head) return
//   const storeNode = [];

  
//   while(head) {
//     storeNode.push(head.value);
//     head = head.next;
//   }

//   return storeNode[storeNode.length - k];
// }


/**
 * Approach 4
 * Store each node value in an array
 * Use recursion to loop through linked list.
 * Use length property of array to pinpoint kth to last node.
 */
function kthToLastNode(k, head) {
  if (!Number.isInteger(k) || k < 1 || !head) return
  const storeNode = [];

  let tranverseNode = (node) => {
    storeNode.push(node);

    if (node.next === null) return;
    tranverseNode(node.next);
  }

  tranverseNode(head);
  if (k > storeNode.length) return;
  return storeNode[storeNode.length - k].value;
}



module.exports = {Node: Node, kthToLastNode: kthToLastNode};


const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(4, a));
