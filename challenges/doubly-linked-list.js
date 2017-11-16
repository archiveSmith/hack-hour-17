/*
Create a doubly linked list with an add and remove method
 */

function LinkedList () {
  this.head = null;
  this.tail = null;
}

function Node (val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function (val) {
  const newNode = new Node(val);
  const prevTail = this.tail;

  if (this.head === null) {
    this.head = this.tail = newNode;
  } else {
    newNode.prev = prevTail;
    prevTail.next = newNode;
    this.tail = newNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  let currNode = this.head;
  while (currNode !== null && currNode.val !== val) {
    currNode = currNode.next;
  }

  if (currNode === this.head) {
    this.head = currNode.next;
  }

  if (currNode === this.tail) {
    this.tail = currNode.prev;
  }

  if (currNode !== null) {
    const prevNode = currNode.prev;
    const nextNode = currNode.next;
    if (prevNode) { prevNode.next = nextNode; }
    if (nextNode) { nextNode.prev = prevNode; }
  }
};

// const list = new LinkedList();
// list.add(1);
// list.add(2);
// list.add(3);
// list.add(4);
// list.remove(4);
// console.log(list);

module.exports = LinkedList;
