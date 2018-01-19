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

const node1 = new Node(3);
const node2 = new Node(5);
const node3 = new Node(7);
const node4 = new Node(2);

node1.next = node2;
node2.next = node3;
node3.next = node4;

const nodeA = new Node(6);
const nodeB = new Node(7);
const nodeC = new Node(1);

nodeA.next = nodeB;
nodeB.next = nodeC;


function addLinkedList(l1, l2) {
  let curr1 = l1;
  let curr2 = l2;

  const sumArr = [];

  let carryOver = 0;

  while (curr1.value || curr2.value) {
    let sum = (curr1.value === null ? 0 : curr1.value) + (curr2.value === null ? 0 : curr2.value) + carryOver;
    carryOver = 0;
    if (sum >= 10) {
      sum = Number(sum.toString().slice(-1));
      carryOver = 1;
    }
    sumArr.push(sum);
    if (curr1.next === null) {
      curr1.value = 0;
    } else {
      curr1 = curr1.next;
    }
    if (curr2.next === null) {
      curr2.value = 0;
    } else {
      curr2 = curr2.next;
    }
  }
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
