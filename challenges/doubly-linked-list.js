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
  
};

/*
Removes the first node with the inputted value
 */
<<<<<<< HEAD
LinkedList.prototype.remove = function (val) {
  let currNode = this.head;
  while (currNode && currNode.val !== val) { currNode = currNode.next; }

  if (currNode === this.head) { this.head = currNode.next; }

  if (currNode === this.tail) { this.tail = currNode.prev; }

  if (currNode !== null) {
    if (currNode.prev) { currNode.prev.next = currNode.next; }
    if (currNode.next) { currNode.next.prev = currNode.prev; }
