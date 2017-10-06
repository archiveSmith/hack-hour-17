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

let newList = new Node();
function zip(l1, l2) {

// if (l1.next===null || l2.next)
//   newList = l1;
//   newList.next = l2;
//   newList.l1.next;
//   newList.l2.next;

if (l1.next===null&& l2.next===null) return newList;


  NewList = l1;
  NewList.next = l2;

  if (l1.next && l2.next) zip(l1.next,l2.next);
  if (l1.next && !l2.next) zip(l1.next,l1.next.next);
  if (!l1.next && l2.next) zip(l2.next,l2.next.next);
};

console.log(arguments);
module.exports = {Node: Node, zip: zip};
