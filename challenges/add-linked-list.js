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
      sum -= 10;
      carryOver = 1;
    }
    sumArr.push(sum);
    if (curr1.next === null) curr1.value = 0;
    else curr1 = curr1.next;
    if (curr2.next === null) curr2.value = 0;
    else curr2 = curr2.next;
  }

  if (carryOver === 1) sumArr.push(1);  

  const temp = sumArr.map(element => new Node(element));
  
  for (let i = 0; i < temp.length - 1; i += 1) {
    temp[i].next = temp[i + 1];
  }
  return temp[0];
}

// iterative
function addLinkedList(num1, num2, carryover) {
  // make a loop of zeroes to handle numbers of un-equal length
  var zero = new Node(0);
  zero.next = zero;
  var node1 = num1, node2 = num2, ansNode;
  var ansList = ansNode = new Node(node1.value + node2.value);
  while (node1 || node2) {
    node1 = node1.next || zero;
    node2 = node2.next || zero;
    if (node1 === zero && node2 === zero) break;
    ansNode.next = new Node(node1.value + node2.value);
    ansNode = ansNode.next;
  }
  //handle the carry-overs. this loop handles all but the last digit
  for (ansNode = ansList; ansNode.next; ansNode = ansNode.next) {
    ansNode.next.value += Math.floor(ansNode.value / 10);
    ansNode.value %= 10;
  }
  //handle the last digit
  if (ansNode.value >= 10) {
    ansNode.next = new Node(1);
    ansNode.value %= 10;
  }
  return ansList;
}

// recursive
function addLinkedList(l1, l2, carryover) {
  if (!l1 && !l2 && !carryover) {
    return null;
  }

  var sum = carryover || 0;
  if (l1) {
    sum += l1.value;
  }
  if (l2) {
    sum += l2.value;
  }
  var result = new Node(sum % 10);
  if (l1 || l2) {
    var rest = addLinkedList(
      l1 ? l1.next : null,
      l2 ? l2.next : null,
      sum >= 10 ? 1 : 0
    );
    result.next = rest;
  }
  return result;
}

// parsing to integer
function addLinkedList(l1, l2) {
  var node1 = l1, node2 = l2;
  var num1 = '', num2 = '';
  while(node1) {
    num1 = node1.value + num1;
    node1 = node1.next;
  }
  while(node2) {
    num2 = node2.value + num2;
    node2 = node2.next;
  }

  num1 = parseInt(num1, 10);
  num2 = parseInt(num2, 10);
  var sum = String(num1 + num2);
  var head = new Node(sum[sum.length - 1]);
  var tail = head;
  for (var i = sum.length - 2; i >= 0; i--) {
    tail.next = new Node(sum[i]);
    tail = tail.next;
  }
  return head;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
