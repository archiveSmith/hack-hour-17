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
 */

 /*
 * Challenge 1: Do this in linear time
 * Challenge 2: Do this in constant space
 * Challenge 3: Do not mutate the original nodes in any way
 *
 */

var Node = function(value) {
  this.value = value;
  this.next = null;
}

function hasCycle(head) {
  const arr = [];
  let pos = head;
  while (pos.next !== null) {
    if (arr.includes(pos)) {
      return true;
    }
    arr.push(pos);
    pos = pos.next;
  }
  return false;
}

module.exports = {Node: Node, hasCycle: hasCycle}
