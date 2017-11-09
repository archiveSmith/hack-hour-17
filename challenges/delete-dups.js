/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */



function deleteDups(head) {
  const cache = {};
  let pointer = head;
  let lastNode = null;
  while (pointer) {
    if (!cache[pointer.value]) {
      cache[pointer.value] = true;
    } else {
      lastNode.next = pointer.next;
    }
    lastNode = pointer;
    pointer = pointer.next;
  }
  return head;
}

// function Node(value) {
//   this.value = value;
//   this.next = null;
// }

// const ll = new Node(1);
// ll.next = new Node(2);
// ll.next.next = new Node(2);
// ll.next.next.next = new Node(3);
// console.log('hi');

// console.log(deleteDups(ll));

module.exports = deleteDups;
