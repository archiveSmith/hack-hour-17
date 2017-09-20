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
  // this.index = 0;
}

function kthToLastNode(k, head) {
  // let index = 1;
  let curr = head;
  let kthNode = head;
  //edge case if head does not exist
  if(!head || k < 1) return undefined;
  //if next does not exist
  for(let i = 0; i < k-1; i++){
    curr = curr.next;
    if(!curr) return undefined;
    }

  while (curr.next) {
      kthNode = kthNode.next;
      curr = curr.next;
    }
    

  //traverse down the linked list

  //if index does not match k 
  //keep going down the list
  //assign kthVal = curr.value when we match

  return kthNode.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
