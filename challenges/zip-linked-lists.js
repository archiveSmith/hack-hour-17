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
  if(typeof l1 !== 'object' || typeof l2 !== 'object' || (!l1 && !l2)) return;
  if(!l1) return l2;
  if(!l2) return l1;
  let l3 = new Node(l1.value);
  let l1Node = l1.next;
  let l2Node = l2;
  let l3Node = l3;
  while(l1Node || l2Node){
    console.log('current l1', l1);
    console.log('current l2', l2);
    console.log('current l3', l3);
    if(l1Node){
      l3.next = new Node(l1Node.value);
      l1Node = l1Node.next;
    }
    if(l2Node){
      l3.next = new Node(l2Node.value);
      l2Node = l2Node.next;
    }
    l3Node = l3.next;
  }
  return l3;
};

// ========== //
// TEST CASES //
// ========== //
console.log('l2 => ', zip(null, new Node(10)));
console.log('l1 => ', zip(new Node(8), null));
console.log('undefined => ', zip(null, null));
console.log('undefined => ', zip(8, 10));

let t1 = new Node(1);
t1.next = new Node(2);
t1.next.next = new Node(3);
t1.next.next.next = new Node(4);
let t2 = new Node(5);
t2.next = new Node(6);
t2.next.next = new Node(7);
console.log('zip(t1, t2): ', zip(t1, t2));



module.exports = {Node: Node, zip: zip};
