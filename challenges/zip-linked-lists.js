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
  //create new linked list
  let zipList = new Node(l1,l2);
  //set up head to be l1.val at index 0
  let head = l1.value;
  zipList.head = curr;
  //this part repeats
  //udpate this.next to l2.value at index 0
  while (l1, l2){
    zipList.next = l2.value;
    curr = l1.value;
    zipList.next = l1.value;
    
  }

};

module.exports = {Node: Node, zip: zip};
