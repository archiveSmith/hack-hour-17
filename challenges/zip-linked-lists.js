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


// Create an empty array to store each node reference for l1 and l2
// go thru the first loop and push all l1 node into the array
// do the same for the second link list
//
function zip(l1, l2) {
  // console.log(l1, l1);
  let l1Array = [];
  let l2Array = [];
  while(l1) {
    l1Array.push(l1);
    l1 = l1.next;
  }
  while(l2) {
    l2Array.push(l2);
    l2 = l2.next;
  }
  // console.log(l1Array, l2Array);

  for (let i = 0; i < l1Array.length; i++) {
    if (!l2Array[i].next === null || !l1Array[i].next === null) break;
    l2Array[i].next = l1Array[i+1];
    l1Array[i].next = l2Array[i];
  }

  return l1Array[0];



};


const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;


const f = new Node('F');
const g = new Node('G');
const h = new Node('H');
const i = new Node('I');
const j = new Node('J');

f.next = g;
g.next = h;
h.next = i;
i.next = j;

zip(a,f);

module.exports = {Node: Node, zip: zip};
