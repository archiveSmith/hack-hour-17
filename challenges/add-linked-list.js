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
function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.value = val;
  this.next = null;
}

LinkedList.prototype.push = function(value) {
  let node = new Node(value);
  
  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
};


function addLinkedList(l1, l2) {
  let currentNode1 = list1.head;
  let currentNode2 = list2.head;
  let newList = new LinkedList();
  let total;
  let carryOver = 0;
  let value1;
  let value2;


  while (currentNode1 || currentNode2) {

    if (currentNode1 === null) {
      value1 = 0;
    } else {
      value1 = currentNode1.value;
    }
    if (currentNode2 === null) {
      value2 = 0;
    } else {
      value2 = currentNode2.value;
    }
    total = value1 + value2;
    console.log(carryOver);
    console.log(total);
    if (total < 10) {
      newList.push(total + carryOver);
      carryOver = 0;
    } else if (total >= 10) {
      newList.push(total - 10);
      carryOver = 1;
    }


    if (currentNode1 !== null) {
      currentNode1 = currentNode1.next;
    }
    if (currentNode2 !== null) {
      currentNode2 = currentNode2.next;
    }

  }
  return newList;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};

// // Test
// let list1 = new LinkedList();
// list1.push(2);
// list1.push(1);
// list1.push(5);
// console.log(list1);
// let list2 = new LinkedList();
// list2.push(5);
// list2.push(9);
// list2.push(2);
// // console.log(list2);

// console.log(addLinkedList(list1, list2));

