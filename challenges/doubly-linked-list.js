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
LinkedList.prototype.add = function (val) {
  let newNode = new Node(val);
  if (!this.head) this.head = this.tail = newNode;
  else {
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }
  return val;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val, curNode = this.head) {
  if (curNode.val === val) {
    let prevNode = curNode.prev;
    curNode = curNode.next;
    if (prevNode) {
      prevNode.next = curNode;
    } else {
      this.head = curNode;
    }
    if (curNode) {
      curNode.prev = prevNode;
    } else {
      this.tail = prevNode;
    }
    return val;
  } else if (curNode.next) {
    this.remove(val, curNode.next);
  } else {
    return undefined;
  }
};

// /*
// Removes the first node with the inputted value
//  */
// LinkedList.prototype.remove = function (val) {
//   let removedVal;
//   if (this.head.val === val) {
//     this.head = this.head.next;
//     if (this.head) this.head.prev = null;
//     removedVal = val;
//   }
//   let curNode = this.head;
//   while (curNode) {
//     if (curNode.val === val) {
//       removedVal = val;
//       let prevNode = curNode.prev;
//       curNode = curNode.next;
//       prevNode.next = curNode;
//       if (curNode) {
//         curNode.prev = prevNode;
//       } else {
//         this.tail = prevNode;
//       }
//       break;
//     }
//     curNode = curNode.next;
//   }

//   return removedVal;
// };

// let ll = new LinkedList();
// ll.add(1);
// ll.add(2);
// ll.add(3);
// // console.log('added 1, 2, 3', ll);
// ll.remove(3);
// console.log('removed 3', ll);

module.exports = LinkedList;
