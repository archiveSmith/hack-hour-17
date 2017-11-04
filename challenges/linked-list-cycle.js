/**
* We are familar with linked lists being linear and terminating:
*
* A->B->C->D
*
* However, linked lists can also have cyclical references:
*
* A->B->C->D
*    ^     |
*    |     V
*    G<-F<-E
*
* Create a function that accepts a linked list and returns true if the linked list has a cyclical reference
*
* hasCycle(node1); // => false
* node5.next = node2;
* hasCycle(node1); // => true
*
* Challenge 1: Do this in linear time
* Challenge 2: Do this in constant space
* Challenge 3: Do not mutate the original nodes in any way
*
*/

let Node = function(value) {
  this.value = value;
  this.next = null;
};

function hasCycle(head) {
  let cyclical = false;
  const cache = {};
  let current = head;
  while (current.next) {
    if (cache[current.value]) {
      cyclical = true;
      break;
    } else {
      cache[current.value] = true;
    }
    current = current.next;
  }
  return cyclical;
}

// const node1 = new Node('1');
// const node2 = node1.next = new Node('2');
// const node3 = node2.next = new Node('3');
// const node4 = node3.next = new Node('4');
// const node5 = node4.next = new Node('5');
//
// node5.next = node2;
//
// console.log('hasCycle ', hasCycle(node1));

module.exports = {Node: Node, hasCycle: hasCycle}
