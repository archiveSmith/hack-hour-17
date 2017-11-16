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
  if (this.head === null) {
    this.head = this.tail = newNode;
  } else {
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  let currNode = this.head;
  while (currNode && currNode.val !== val) { currNode = currNode.next; }

  if (currNode === this.head) { this.head = currNode.next; }

  if (currNode === this.tail) { this.tail = currNode.prev; }

  if (currNode !== null) {
    if (currNode.prev) { currNode.prev.next = currNode.next; }
    if (currNode.next) { currNode.next.prev = currNode.prev; }
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
