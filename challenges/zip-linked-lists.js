/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  // Should it return if one list if the other does not exist?  Or just return undefined?
  if (!l1 || !l2) return l1 || l2;
  let node1 = l1;
  let node2 = l2;
  let iteration = 0;
  while (node1 && node2) {
    let oldNext1 = node1.next;
    let oldNext2 = node2.next;
    [node1.next, node2.next] = [node2, node1.next];
    node1 = oldNext1;
    node2 = oldNext2;
  }

  // Should it continue if one list is longer and has elements left?


  return l1;
};

module.exports = {Node: Node, zip: zip};
//
// function logList(list) {
//   let str = '';
//   while (list) {
//     str += list.value;
//     list = list.next;
//   }
//   console.log(str);
// }
//
// let a1 = new Node('W');
// let a2 = new Node('X');
// let a3 = new Node('Y');
// let a4 = new Node('Z');
// a1.next = a2;
// a2.next = a3;
// a3.next = a4;
//
// let b1 = new Node('A');
// let b2 = new Node('B');
// let b3 = new Node('C');
// let b4 = new Node('D');
// b1.next = b2;
// b2.next = b3;
// b3.next = b4;
//
//
// logList(a1);
// logList(b1);
// logList(zip(a1, b1));
