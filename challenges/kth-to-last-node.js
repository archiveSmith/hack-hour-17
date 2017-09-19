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
function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  const nodeValues = [];
  let currNode = head;
  
  if (k === isNaN || k < 1) return undefined;
  while (currNode !== null) {
    nodeValues.push(currNode.values);
        currNode = currNode.next;
        console.log(nodeValues);
      }
      
      return nodeValues[nodeValues.length - 1];
    }


 const a = new Node('A');
 const b = new Node('B');
 const c = new Node('C');
 const d = new Node('D');
 const e = new Node('E');

 a.next = b;
 b.next = c;
 c.next = d;
 d.next = e;
console.log(kthToLastNode(2, a));


module.exports = {Node: Node, kthToLastNode: kthToLastNode};
