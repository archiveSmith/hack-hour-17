/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node (value) {
  this.value = value;
  this.next = null;
}

function reverseLinkedList (head) {
  if (head.value === null) { return head; }
  let node = head;
  let newNext = null;
  let prevNext = node.next;
  while (prevNext) {
    node.next = newNext;
    newNext = node;
    node = prevNext;
    prevNext = prevNext.next;
  }

  node.next = newNext;

  return node;
}

// let list = new Node(1);
// list.next = new Node(2);
// list.next.next = new Node(3);

// console.log(reverseLinkedList(list));

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
