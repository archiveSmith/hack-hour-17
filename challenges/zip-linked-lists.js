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
    // Setting pointer variables.
    let curr1 = temp1 = l1;
    let curr2 = temp2 = l2;
  
    // Zip until we reach the end of one/both of the lists.
    while (curr1 && curr2) {
  
      // Moving temp pointers.
      if (temp1) temp1 = temp1.next;
      if (temp2) temp2 = temp2.next;
  
      // Zipping / alternating.
      curr1.next = curr2;
      if (temp1) curr2.next = temp1;
  
      // Moving curr pointers.
      [curr1, curr2] = [temp1, temp2];
  
    }
  
    // Return first list if it exists, second if first is null.
    // Will return null (via l2) if both are null.
    return l1 ? l1 : l2;
  }

  // Code (Recursive)
  // function zip (l1, l2) { // Make one node and recurse the rest.
  //   if (!l1) return l2;   // If no first list, return second list.
  //   if (!l2) return l1;   // If no second list, return first list.
  //   return new Node(      // New node with following properties:
  //     l1.value,           // Value: l1's value.
  //     zip(l2, l1.next)    // Next: Recursive call. l2 is new l1,
  //   );                    // and l1.next is new l2.
  // }                       // Shorter code. Longer call stack.


module.exports = {Node: Node, zip: zip};
