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
}

function kthToLastNode(k, head) {
  //check for edge cases

  /* Solution 1
  if(!Number.isInteger(k) || k < 1 || Object.getPrototypeOf(head) != Node.prototype) return;

    let temp = head;
    let length = 0;

    while(temp != null){ //while the value of this.next is not equal to null
      temp = temp.next; //make temp = to temp.next;
      length++; //increase the length by 1
    }  

    if(length < k) return;
    temp = head;

    for(let i = 0; i < length - k; i++){ //while i = 0; i < the total of length - k, i++
      temp = temp.next; //returns the k to the last value
    }
    return temp;
    */

    /*Solution 2*/
    if(!Number.isInteger(k) || k < 1 || Object.getPrototypeOf(head) != Node.prototype) return;
    const nodeValues = [];
    while( head != null){
      nodeValues.push(head.values);
      head = head.next;
    }
    return nodeValues(nodeValues.length - k);
    
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