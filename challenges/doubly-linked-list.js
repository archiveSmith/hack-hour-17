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
  if (this.head === null && this.tail === null) {
    this.head = new Node(val);
    this.tail = this.head;
    return;
  }
  const lastNode = this.tail;
  this.tail = new Node(val);
  this.tail.prev = lastNode;
  lastNode.next = this.tail;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let pointer = this.head;
  
  while (pointer !== null && pointer.val !== val) {
    pointer = pointer.next;
  }
  if(pointer === null) return null;
  pointer.prev.next = pointer.next;
  pointer.next.prev = pointer.prev;
};

// const ll = new LinkedList();
// ll.add(3);
// ll.add(5);
// ll.add(7);
// ll.add(9);
// console.log("ll adds: ", Object.assign({}, ll));
// ll.remove(7);
// console.log("ll removes: ", ll);


module.exports = LinkedList;
