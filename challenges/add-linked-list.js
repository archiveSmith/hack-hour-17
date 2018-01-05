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

//get numbers from linked list
function getSum (ll) {
  let currNode = this.head;
  let array = [];

  while (currNode !== null) {
    array.push(currNode.value);
    currNode = currNode.next;
  }

  return parseInt(array.reverse().join(''));
}

function addLinkedList(l1, l2) {
//add numbers from L1 & L2
let first = getSum(l1);
let second = getSum(l2);
let result = first + second;

//break numbers up into array to turn into linked list
let digits = result.toString().split('');

//add digits to a new linked list

for (let i = 0; i < digits.length; i += 1) {
  const newNode = new Node(digits[i]);
  if (this.head === null) {
    this.head = newNode;
  } else {
    this.tail.next = newNode;
  }
  this.tail = newNode;
  
}

}

module.exports = {Node: Node, addLinkedList: addLinkedList};
