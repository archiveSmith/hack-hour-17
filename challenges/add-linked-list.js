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
// function getSum (ll) {
//   let currNode = this.head;
//   let array = [];

//   while (currNode !== null) {
//     array.push(currNode.value);
//     currNode = currNode.next;
//   }

//   return parseInt(array.reverse().join(''));
// }

// function addLinkedList(l1, l2) {
// //add numbers from L1 & L2
// let first = getSum(l1);
// let second = getSum(l2);
// let result = first + second;

// //break numbers up into array to turn into linked list
// let digits = result.toString().split('');

// //add digits to a new linked list

// for (let i = 0; i < digits.length; i += 1) {
//   const newNode = new Node(digits[i]);
//   if (this.head === null) {
//     this.head = newNode;
//   } else {
//     this.tail.next = newNode;
//   }
//   this.tail = newNode;
  
// }

function addLinkedList(l1, l2) {
  let l1Current = l1;
  let l2Current = l2;

  let { addedNode, carry } = addNodes(l1Current, l2Current);
  let current = addedNode;

  const newLinkedList = addedNode;

  while (current) {
    l1Current = l1Current.next;
    l2Current = l2Current.next;

    ({ addedNode, carry } = addNodes(l1Current, l2Current, carry));

    current.next = addedNode;
    current = current.next;
  }

  return newLinkedList;
}

const addNodes = (node1, node2, carry = 0) => {
  if (!node1 && !node2 && !carry) return { addedNode: null, carry: null };

  let sum = carry;
  if (node1) sum += node1.value || 0;
  if (node2) sum += node2.value || 0;

  return {
    addedNode: new Node(sum % 10),
    carry: Math.floor(sum / 10)
  };
};

module.exports = {Node: Node, addLinkedList: addLinkedList};
