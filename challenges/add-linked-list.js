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

Node.prototype.add = function (val) {
  let currNode = this;
  while(currNode.next != null) {
    currNode = currNode.next;  
  }
  currNode.next = new Node(val);
};

function addLinkedList(l1, l2) {
  const retList = new Node();
  let l1Pos = l1;
  let l2Pos = l2;
  let carry = 0;
  while (l1Pos !== null && l2Pos !== null) {

    let sum = l1Pos.value + l2Pos.value;
    if (carry !== 0) {
      sum += carry;
      carry = 0;
    }
    const rem = sum % 10;
    carry = (sum - rem) / 10;
    
    if (retList.value) {
      retList.add(rem);
    } else {
      retList.value = rem;
    } 
    l1Pos = l1Pos.next;
    l2Pos = l2Pos.next;
  }
  return retList;
}


module.exports = {Node: Node, addLinkedList: addLinkedList};
