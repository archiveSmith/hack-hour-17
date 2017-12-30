/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

const Node = function(value) {
  this.value = value;
  this.next = null;
};

const reverseLinkedList = function(head) {
  let current = head;
  let previous = null;
  let temp;

  while (current) {
    temp = current.next;
    current.next = previous;
    previous = current;
    current = temp;
  }

  return previous;
};

module.exports = { Node: Node, reverseLinkedList };