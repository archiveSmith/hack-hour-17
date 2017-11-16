/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
*/
LinkedList.prototype.add = function(val) {
  let node = new Node(val);
  if (!this.head) this.head = node;
  if (this.tail) {
    this.tail.next = node;
    node.prev = this.tail;
  }
  this.tail = node;
};

/*
Removes the first node with the inputted value
*/
LinkedList.prototype.remove = function(val) {
  let curr = this.head;
  if (curr.val === val) {
    this.head = curr.next;
  }
  while (curr && curr.val !== val) curr = curr.next;
  if (curr) {
    if (curr.prev) curr.prev.next = curr.next;
    if (curr.next) curr.next.prev = curr.prev;
  }
  else if (this.tail.val === val) {
    this.tail = null;
  }
};

module.exports = LinkedList;
