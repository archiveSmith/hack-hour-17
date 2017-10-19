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
  //test case if both exist
  console.log(l2.next.value);
  let curr1 = l1;
  let curr2 = l2;
  while (l1.next !== null & l2.next !== null) {
    // curr2.value = curr1.next.value;
    curr1.next.value = curr2.value;
    curr1 = curr1.next.next;
    console.log(curr1);
  }
  //return curr1;
};

module.exports = {Node: Node, zip: zip};

//console.log(arguments);

let test1 = { value: 'awe', next: { value: 'some', next: { value: 'ness', next: null } } };
let test2 = { value: 'next', next: { value: 'time', next: { value: 'bye', next: null } } };
console.log(zip(test1, test2));

