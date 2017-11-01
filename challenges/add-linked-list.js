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
  const newL = new Node(l1.value + l2.value);
  let holder = newL;
  let curr1 = l1.next;
  let curr2 = l2.next;
  let carryOver = 0;

  while (curr1) {
    const numStack = [];
    console.log('carryover', carryOver)
    let sum = curr1.value + curr2.value;

    while (sum) {
      numStack.push(sum % 10);
      sum = Math.floor(sum / 10);
    }
    const temp = new Node(numStack[0] + carryOver);

    holder.next = temp;
    holder = temp;
    carryOver = numStack[1] || 0;
    curr1 = curr1.next;
    curr2 = curr2.next;
  }
  return newL;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};

// let test = new Node(2);
// test.next = new Node(1);
// test.next.next = new Node(5);
// let test2 = new Node(5);
// test2.next = new Node(9);
// test2.next.next = new Node(2);
// console.log(addLinkedList(test, test2));
