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
  if (!this.head) {
    this.head = new Node(val);
    this.tail = this.head;
  }
  else {
    this.tail.next = new Node(val);
    this.tail.next.prev = this.tail.next;
    this.tail =  this.tail.next;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if (this.head.val===val) {
    this.head = this.head.next;
    this.head.prev=null;
  }
  else {
    while (this.head.next) {
      if (this.head.next.val===val) {
        if (this.head.next.next)  {
          this.head.next = this.head.next.next;
          this.head.next.next.prev = this.head;
        }
          else this.head.next = null;

      }
    }
  }
};

module.exports = LinkedList;
