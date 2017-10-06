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
  // if l1 is empty, have l1.next point to l2's first node DONE
  // whether the loop continues depends on l1?
  let newList = new Node(l1.value);
  
  let currNew = newList;
  
  let currL1 = l1;
  let currL2 = l2;
  
  while (currL2.next) {
    currNew.next = currL2;
    currL2 = curL2.next;
    currNew = currNew.next;
  }
  
  while (currL1.next) {
    currL1 = curr1.next;
    currNew.next = currL1;
    currNew = currNew.next;
  }
  
  return newList;
};

module.exports = {Node: Node, zip: zip};
