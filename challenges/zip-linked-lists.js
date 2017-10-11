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
  //create new linked list to store zipped list
  let zippedList;

  //check if l1 exists
  if (l1) {
    zippedList.head.value = l1.head.value;
    zipedList.head.next = l2.head;
  }
  
  //store values in temp variables?
  let first = l1.head;
  let second = l2.head;
  //alternate between lists grabbing current node to zipped list using while?
  let currentNode = l2.head;
  
//check if there are still upcoming positions?
  while (first != null && second != null) {
    //
    zippedList. = l1.head;
  }

};

module.exports = {Node: Node, zip: zip};
