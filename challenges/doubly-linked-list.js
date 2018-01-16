/*
Create a doubly linked list with an add and remove method
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor(val) {
    this.head = new Node(val);
    this.tail = this.head;
  }

  add(val) {
    // Save the tail in temp variable lastNode
    const lastNode = this.tail;
    this.tail = new Node(val);
    this.tail.prev = lastNode;
    lastNode.next = this.tail;
  }

  remove(val) {
    let pointer = this.head;

    while (pointer !== null && pointer.val !== val) {
      pointer = pointer.next;
    }
    if (pointer === null) return null;
    pointer.prev.next = pointer.next;
    pointer.next.prev = pointer.prev;
  }

}


// const ll = new LinkedList();
// ll.add(3);
// ll.add(5);
// ll.add(7);
// ll.add(9);
// console.log("ll adds: ", Object.assign({}, ll));
// ll.remove(7);
// console.log("ll removes: ", ll);


module.exports = LinkedList;

/////////////////////// Linked List cohort 17 - my attempt ///////////////////////////////////

// function LinkedList() {
//   this.head = null;
//   this.tail = null;
// }

// function Node(val) {
//   this.val = val;
//   this.next = null;
//   this.prev = null;
// }

// /*
// Adds a node to the end of the list
//  */
// LinkedList.prototype.add = function(val) {
//   if (this.head === null && this.tail === null) {
//     this.head = new Node(val);
//     this.tail = this.head;
//     return;
//   }
//   const lastNode = this.tail;
//   this.tail = new Node(val);
//   this.tail.prev = lastNode;
//   lastNode.next = this.tail;
// };

// /*
// Removes the first node with the inputted value
//  */
// LinkedList.prototype.remove = function(val) {
//   let pointer = this.head;

//   while (pointer !== null && pointer.val !== val) {
//     pointer = pointer.next;
//   }
//   if(pointer === null) return null;
//   pointer.prev.next = pointer.next;
//   pointer.next.prev = pointer.prev;
// };


// ///////////////////////////////// DOUBLY LINKED-LIST ///////////////////////////////////////////////


// // Basic - O(n) add
// function LinkedList(val) {
//   this.head = new Node(val);
//   this.tail = this.head;
// }

// function Node(val) {
//   this.val = val;
//   this.next = null;
//   this.prev = null;
// }

// LinkedList.prototype.add = function(val) {
// // Use the value to create a new node
//   var newNode = new Node(val);
// // Attach the node to the end of the linked list
//   var temp = this.head;
//   while (temp.next) {
//     temp = temp.next;
//   }
//   temp.next = newNode;
//   newNode.prev = temp;
// }

// LinkedList.prototype.remove = function(val) {
//   // Iterate through linked list
//   var temp = this.head;
//   while (temp && temp.val !== val) {
//     temp = temp.next;
//   }

//   // If we encounter the value, remove the node
//   if (temp) {
//     if (temp === this.head) {
//       temp.next.prev = null;
//       this.head = temp.next;
//     } else {
//       temp.prev.next = temp.next;
//       // account for removing the tail
//       if (temp.next) temp.next.prev = temp.prev;
//     }
//   }
// };
