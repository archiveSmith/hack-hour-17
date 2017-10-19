
//  * Write a function that takes two parameters, an integer and the head of a
//  * singly linked list, and returns the VALUE on the kth to last node in the list.
//  *
 const a = new Node('A');
 const b = new Node('B');
 const c = new Node('C');
 const d = new Node('D');
 const e = new Node('E');
 const f = new Node('F');
 
 
 a.next = b;
 b.next = c;
 c.next = d;
 d.next = e;
 e.next = f;
 
 //kthToLastNode(3, a); -> returns 'D' (the value on the second to last node)
 

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  if (head.next === null) {
    return undefined;
  }
  let curr = head;
  let counter = 0;
  while (curr.next) {
    curr = curr.next;
    counter += 1;
  }
  let times = counter - k;
  let current = head;
  while (times > 0) {
    current = current.next;
    times -= 1;
  }
  // console.log(current.next.value);
  return current.next.value;
}
console.log(kthToLastNode(3, a));
module.exports = {Node: Node, kthToLastNode: kthToLastNode};
