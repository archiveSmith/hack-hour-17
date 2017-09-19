/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

// function kthToLastNode(k, head) {
//   let lengthOfList = 1;
//   let currentNode = head;
//   while (currentNode.next !== null) {
//     currentNode = currentNode.next;
//     lengthOfList += 1;
//   }
//   let indexOfkTH = lengthOfList - k;
//   if (indexOfkTH < 0) {
//     return null;  
//   }   
//   currentNode = head;
//   while (indexOfkTH > 0) {
//     indexOfkTH -= 1;
//     currentNode = currentNode.next;
//   }
//   return currentNode;
// }

//Above works but is forced to loop twice through Linked List.
//Below version is quicker as only navigates through Linked List once..

function kthToLastNode(k, head) {
  let endPointer = head;
  if (k < 1) {
    return null;
  }
  let counter = 1;
  while (counter < k) {
    if (endPointer.next == null) {
      return null;
    }
    endPointer = endPointer.next;
    counter += 1;
  }
  let kThPointer = head;
  while (endPointer.next != null) {
    endPointer = endPointer.next;
    kThPointer = kThPointer.next;
  }
  return kThPointer;
}


 /*const a = new Node('A');
 const b = new Node('B');
 const c = new Node('C');
 const d = new Node('D');
 const e = new Node('E');
 
 a.next = b;
 b.next = c;
 c.next = d;
 d.next = e;
 
 console.log(kthToLastNode(5, a));*/

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
