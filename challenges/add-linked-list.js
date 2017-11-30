/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val
  this.next = null
}


function addLinkedList(l1, l2) {
  let l1Current = l1
  let l2Current = l2

  let { addedNode, carry } = addNodes(l1Current, l2Current)
  let current = addedNode

  const newLinkedList = addedNode

  while (current) {
    l1Current = l1Current.next
    l2Current = l2Current.next

    ({ addedNode, carry } = addNodes(l1Current, l2Current, carry))

    current.next = addedNode
    current = current.next
  }

  return newLinkedList
}

const addNodes = (node1, node2, carry = 0) => {
  if (!node1 && !node2 && !carry) return { addedNode: null, carry: null }

  let sum = carry
  if (node1) sum += node1.value || 0
  if (node2) sum += node2.value || 0

  return {
    addedNode: new Node(sum % 10),
    carry: Math.floor(sum / 10),
  }
}

// class LinkedList {
//   constructor() {
//     this.head = null
//     this.tail = null
//   }
//
//   add(val) {
//     // create a new node with the input value
//     const node = new Node(val)
//     // if head is null, set node at head and tail
//     if (!this.head && !this.tail) {
//       this.head = node
//       this.tail = node
//     } else {
//       // append the new node to tail
//       this.tail.next = node
//       // reset tail with the new node
//       this.tail = node
//     }
//   }
// }
//
//
// const l1 = new LinkedList()
// l1.add(2)
// l1.add(1)
// l1.add(5)
//
// const l2 = new LinkedList()
// l2.add(5)
// l2.add(9)
// l2.add(2)

// function addLinkedList(l1, l2) {
//   const addedList = new LinkedList()
//   let quotient = 0
//   let currentL1 = l1.head
//   let currentL2 = l2.head
//   while (currentL1 && currentL2) {
//     let sum = currentL1.value + currentL2.value + quotient
//     quotient = 0
//     if (sum > 9 && currentL1.next) {
//       quotient = Math.floor(sum / 10)
//     }
//     addedList.add(sum % 10)
//     currentL1 = currentL1.next
//     currentL2 = currentL2.next
//   }
//   return addedList
// }

// let myAddedList = addLinkedList(l1, l2)
//
// function logEachListNode(list) {
//   let current = list.head
//   while (current) {
//     console.log(current)
//     current = current.next
//   }
// }
//
// logEachListNode(myAddedList)

module.exports = {Node: Node, addLinkedList: addLinkedList};
