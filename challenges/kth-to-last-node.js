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

// Define a a function call kthToLastNode that takes the parameters of k and head
// k is the index starting from the last node
// make a temp variable call currNode to store the head node
function kthToLastNode(k, head) {
  // console.log(head);
  // console.log(k);
  const string = 'out of index range';
  if (k < 0) return string;
  let currNode = head;
  for (let i = 0; i <= k; i += 1) {
    currNode = currNode.next;
    if (!currNode.next) return undefined;
  }

  return currNode.value;
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
