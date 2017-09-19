/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 const a = new Node('A');
 const b = new Node('B');
 const c = new Node('C');
 const d = new Node('D');
 const e = new Node('E');
 *
a.next = b;
b.next = c;
c.next = d;
d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
a.next = b;
b.next = c;
c.next = d;
d.next = e;

function kthToLastNode(k, head) {
  // iterate until you get till one before null
  let count = 0;
  let current = head;
  for (var i = 0; current; current = current.next) {
    i++;
  }
  current = head;
  while (current) {
    if (count === i-k) {
      return current.value;
    }
    console.log(count)
    current = current.next;
    count++;

  }
}
console.log(kthToLastNode(2, a))


module.exports = {Node: Node, kthToLastNode: kthToLastNode};
