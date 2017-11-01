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
<<<<<<< HEAD
  if (!(l1 instanceof Node) || !(l2 instanceof Node)) {
    return;
  }

  let val1 = l1.value || 0;
  let val2 = l2.value || 0;
  const firstSum = val1 + val2;
  let carryOver = 0;
  let sumLinkedList;
  if (firstSum === 10) {
    firstSum -= 10;
    sumLinkedList = new Node(firstSum + carryOver);
    carryOver = 1;
  } else {
    sumLinkedList = new Node(firstSum + carryOver);
    carryOver = 0;
  }

  l1 = l1.next;
  l2 = l2.next
  let node = sumLinkedList;

  while (l1 !== null || l2 !== null) {
    let val1 = (l1 !== null) ? l1.value : 0;
    let val2 = (l2 !== null) ? l2.value : 0;
 
    let sum = val1 + val2;
    if (sum >= 10) {
      sum -= 10;
      node.next = new Node(sum + carryOver);
      carryOver = 1;
    } else {
      node.next = new Node(sum + carryOver);
      carryOver = 0;
    }

    node = node.next;
    l1 = (l1 !== null) ? l1.next : null;
    l2 = (l2 !== null) ? l2.next : null;
  }

  return sumLinkedList;
}

const list1 = new Node(2);
list1.next = new Node(1);
list1.next.next = new Node(5);

const list2 = new Node(5);
list2.next = new Node(9);
list2.next.next = new Node(2);

console.log(addLinkedList(list1, list2));

module.exports = { Node: Node, addLinkedList: addLinkedList };
=======

}

module.exports = {Node: Node, addLinkedList: addLinkedList};
>>>>>>> db36a376bcf35b0b1601d683c94818389433578a
