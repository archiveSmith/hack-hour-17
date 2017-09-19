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
  let listLength = 1;
  let currentNode;
  if (head) {
    currentNode = head;
  }
  //loop through chain, and create a previous value to loop through the chain backwards
  while(currentNode.next) {
    currentNode.next.prevNode = currentNode;
    currentNode = currentNode.next;
    listLength++;
  }
  if(k > listLength) {return "'k' exceeded length of list."}
  if(k === listLength) {return head.value}
  //loop through the chain backwards until reaching the kth value
  let tail = currentNode;
  for (let i = 1; i < k; i++) {
    tail = tail.prevNode
  }
  return tail.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
