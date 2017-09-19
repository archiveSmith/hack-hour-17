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

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  //initiate node you are looking at
  let currNode = head;
  //create cache of values? starting at first node, loop through Linked List
  let position = 0
  let cache = {};
  
  while (currNode) {
    cache[position] = currNode.value;
    position++;
    currNode = currNode.next;
  }

  
  //return value at kth to the last

  return cache[position - (k)];
  

}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};