/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.value = val;
  this.next = null;
}

// adds node to end of list
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

// func to count # nodes in list
LinkedList.prototype.contains = function() {
  let currentNode = this.head;
  let found = false;
  let count = 0;
  
  while (!found && currentNode) {
    if (currentNode.value === this.tail) {
      found = true;
      return count;
    } else {
      currentNode = currentNode.next;
      count ++;
    }
  }
  return count;
};

function zip(l1, l2) {
  let zippedList = new LinkedList();

  let alternate = 1;
  let count = 0;

  let length = list1.contains() + list2.contains();
  // let length2 = list2.contains();

  let currentNode1 = list1.head;
  let currentNode2 = list2.head;
  while (count < length) {
    if (alternate === 1) {
      zippedList.push(currentNode1);
      currentNode1 = currentNode1.next;
      alternate = 2;
    }
    else if (alternate === 2) {
      zippedList.push(currentNode2);
      currentNode2 = currentNode2.next;
      alternate = 1;
    }
    count++;
  }
  return zippedList;
};

module.exports = {Node: Node, zip: zip};

// // Test
// let list1 = new LinkedList();
// list1.push(0);
// list1.push(1);
// list1.push(2);
// list1.push(3);
// // console.log(list1);
// let list2 = new LinkedList();
// list2.push('a');
// list2.push('b');
// list2.push('c');
// list2.push('d');
// // console.log(list2);

// // console.log(list1.contains());
// let zipped = zip(list1, list2);
// console.log(zipped);
// console.log(zipped.head.next.next);
// console.log(zipped.contains());