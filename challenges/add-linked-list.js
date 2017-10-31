/* You have two numbers represented by linked lists. 
Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */


function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
let nodeone = new Node(l1);
let nodetwo = new Node(l2);

let nodethree = new Node(nodeone.value+nodetwo.value)
if(nodethree.value >=10) {
  nodthree.value - 9;
}
nodethree.next = new Node(nodeone.next + nodetwo.next);
if(nodethree.next >= 10) {
  nodethree.next - 9;
}
nodethree.next.next  =new Node(nodeone.value + nodetwo.value + nodeone.next + nodetwo.next)
if(nodethree.next.next.value >= 10) {
  nodethree.next.next.value - 9;
}

  return nodethree
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
