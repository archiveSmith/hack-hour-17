/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

 function Node(val) {
   this.value = val;
   this.next = null;
 }

 function addLinkedList(l1, l2) {
   if (!l1.value && !l2.value) return;
   const addNodes = (node1, node2, carry = 0) => {
     let nextCarry = 0;
     let val1 = node1 ? node1.value : 0;
     let val2 = node2 ? node2.value : 0;

     let newNode = new Node(val1 + val2 + carry);

     if (newNode.value > 9) {
       newNode.value = newNode.value - 10;
       nextCarry = 1;
     }

     if (!node1) node1 = new Node(); // these two lines make sure
     if (!node2) node2 = new Node(); // node*.next doesn't throw error
                                     // if node* is already null.

     if (node1.next || node2.next || nextCarry === 1) {
       newNode.next = addNodes(node1.next, node2.next, nextCarry);
     }
     return newNode;
   }
   return addNodes(l1, l2);
 }

module.exports = {Node: Node, addLinkedList: addLinkedList};
