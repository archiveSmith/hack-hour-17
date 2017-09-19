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
  if(head === undefined) {
    head = a;
  }
  if(k === 0) {
    return head;
  }
  let counter = 0;
  let tail;
  let obj = {}

  while(head) {
    obj[counter] = head
    head = head.next
    counter++
  
    }



}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
