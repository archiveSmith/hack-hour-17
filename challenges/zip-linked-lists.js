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
  let current;
  if(l1 === undefined) return l2;
  if(l2 === undefined) return l1;
  
  if(l1 && l2) {
    if(!l1.next) {
      l1.next = l2;
    }
    else {
      current = l1
      while(current.next !== null) {
        current = current.next;
      }
      current.next = l2;
    }
  }

return current
}

module.exports = {Node: Node, zip: zip};
