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

// //helper function
function createVal(array) {
  return array.reduceRight(function (rig, val) {
    let o = new Node(val);
    if (rig) {
      o.next = rig;
    }
    return o;
  }, undefined);
}


function addLinkedList(l1, l2) {
  //first have to make difference between l1 and l2
  //take first value of l2 and sum it with first value of l2 and so on...
  //if it's not one take last digit and remember others and add it with sum of next numbers
  let value = 0;
  let last, list;

  while (l1 || l2) {
    if (l1) {
      value += l1.value;
      l1 = l1.next;
    }
    if (l2) {
      value += l2.value;
      l2 = l2.next;
    }
    if (last) {
      last.next = new Node(value % 10);
      last = last.next;
    } else {
      list = new Node(value % 10);
      last = list;
    }
    value = value / 10 | 0;
  }
  if (value) {
    last.next = new Node(value);
  }
  return list;
}

module.exports = { Node: Node, addLinkedList: addLinkedList };
