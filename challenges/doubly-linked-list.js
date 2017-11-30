/*
Create a doubly linked list with an add and remove method
 */

const Node = function NodeConstructor(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
};

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(val) {
    const newNode = new Node(val);

    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  remove(val) {
    const nodeToRemove = this.getNode(val);
    if (!nodeToRemove) return;

    const isHead = nodeToRemove === this.head;
    const isTail = nodeToRemove === this.tail;

    if (isHead) {
      this.head = nodeToRemove.next;
      if (this.head) this.head.prev = null;
    }

    if (isTail) {
      this.tail = this.tail.prev;
      if (this.tail) this.tail.next = null;
    }

    if (!isHead && !isTail) {
      nodeToRemove.prev.next = nodeToRemove.next;
      nodeToRemove.next.prev = nodeToRemove.prev;
    }

    return nodeToRemove;
  }

  getNode(val) {
    let current = this.head;
    while (current && current.val !== val) current = current.next;
    return current ? current : undefined;
  }
}

module.exports = LinkedList;
