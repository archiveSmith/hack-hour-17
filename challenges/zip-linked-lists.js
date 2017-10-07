/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  var currentL1 = l1;
  var currentL2 = l2;
  while (currentL1 && currentL2) { // while both are not null...
    let t1 = currentL1.next;
    let t2 = currentL2.next;
    l1.next = l2;
    l2.next = t1;
    currentL1 = currentL1.next;
    currentL2 = currentL2.next;
  }
};

module.exports = {Node: Node, zip: zip};

var a = new Node(1);
var b = new Node(2);
var c = new Node(3);
a.next = b;
b.next = c
var l1 = a;

var d = new Node(4);
var e = new Node(5);
var f = new Node(6);
d.next = e;
e.next = f;
var l2 = d;



console.log(l1);
console.log(l2);

zip(l1, l2);

console.log(l1);
console.log(l2);
