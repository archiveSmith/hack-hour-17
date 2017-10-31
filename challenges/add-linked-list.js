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

const calculateListSum = list => {
  let sum = '';
  let cur = list;
  while (cur) {
    sum += cur.value;
    cur = cur.next;
  }
  return Number(sum.split('').reverse().join(''));
};

const createLinkedList = total => {
  arr = total.toString().split('').reverse();
  let head = new Node(Number(arr[0]));
  let cur = head;
  for (let i = 1; i < arr.length; i++) {
    let newNode = new Node(Number(arr[i]));
    cur.next = newNode;
    cur = cur.next;
  }
  return head;
}

function addLinkedList(l1, l2) {
  // break down list 1
  let sum1 = calculateListSum(l1);
  // break down list 2
  let sum2 = calculateListSum(l2);
  // add numbers
  let total = sum1 + sum2;
  // create and return new list
  return createLinkedList(total);
}

// let list1 = new Node(2);
// list1.next = new Node(1);
// list1.next.next = new Node(5);
// let list2 = new Node(5);
// list2.next = new Node(9);
// list2.next.next = new Node(2);

// addLinkedList(list1, list2);

module.exports = { Node: Node, addLinkedList: addLinkedList };
