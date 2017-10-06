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
  if (!l1)
    return l2;
  if (!l2)
    return l1;

  let newHead = l1;
  let leftNode = l1;
  let rightNode = l2;

  for(var i = 0; leftNode !== null && rightNode !== null; i++) {

    if(rightNode !== null) {
      nextLeft = leftNode.next;
      leftNode.next = rightNode;
      leftNode = nextLeft;
    }

    if(leftNode !== null) {
      nextRight = rightNode.next;
      rightNode.next = leftNode;
      rightNode = nextRight;
    }
  }

  return newHead;
};

// node1 = new Node(1);
// node2 = new Node(2);
// node3 = new Node(3);
// node4 = new Node(4);
// node5 = new Node(5);
// node6 = new Node(6);

// node1.next = node3;
// node3.next = node5;
// node2.next = node4;
// node4.next = node6;

// nodeList1 = node1;
// nodeList2 = node2;
// // nodeList1 = null;

// console.log(zip(nodeList1));

module.exports = {Node: Node, zip: zip};
