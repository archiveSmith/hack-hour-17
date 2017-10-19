/* Merge two linked lists so that their nodes alternate.
 * Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class.
 * No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  let temp1;
  let temp2;
  // set current to l1
  let current = l1;
  while (l1 && l2) {
    if (!current.next) {
      current.next = l2;
      console.log('l1:', l1);
      break;
    } else {
      // get l1's next node and store in temp1
      temp1 = current.next;
      // reassign current.next to head of l2
      current.next = l2;
      // get l2's next and store in temp2
      // need temp2 variable here or there will be a circular reference on last node
      temp2 = l2.next;
      // reassign l2.next to temp1
      l2.next = temp1;
      // move current one node down
      current = temp1;
      // reset head of l2 to temp2
      l2 = temp2;
    }
  }
  return l1;
}

let l1 = { value: 1, next: { value: 2, next: null } };
let l2 = { value: 3, next: { value: 4, next: null } };

console.log(zip(l1, l2));

module.exports = { Node, zip };
