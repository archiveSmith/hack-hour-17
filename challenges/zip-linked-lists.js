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
  if (!l1.next) {
    l1.next = l2;
  }
  let current = l1;
  while (l1 && l2) { // while both are not null...
    let t1 = current.next;
    current.next = l2;
    let t2 = l2.next;
    l2.next = t1;
    current = t1;
    l2 = t2;
  }
  return l1;
};

module.exports = {Node: Node, zip: zip};

// var a = new Node(1);
// var b = new Node(3);
// var c = new Node(5);
//
// var d = new Node(2);
// var e = new Node(4);
// var f = new Node(6);
//
// a.next = b;
// b.next = c
// var l1 = a;
//
// d.next = e;
// e.next = f;
// var l2 = d;
//
// zip(l1, l2);
//
// while (l1) {
//   console.log(l1.value);
//   l1 = l1.next;
// }
