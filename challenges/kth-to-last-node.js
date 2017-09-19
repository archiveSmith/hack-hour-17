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

// add new node to end of list
function pushNode(val,head) {
    let current = head;
    let added = false;
    // while current node exists
    while (current) {
        // if next node doesn't exist, next = new node
        if (current.next === null && added === false) {
            current.next = new Node(val);
            added = true;
        }
        current = current.next;
    }
}

function kthToLastNode(k, head) {
    // find length
    let length  = 1;
    let current = head;
    // let added = false;

    while (current) {
            current = current.next;
            length++;
    }
    length = length - 1;

    // find length - k and return
    let newCount = 0;
    current = head;
    
    while (newCount < length - k) {
            current = current.next;
            newCount++;
    }
    return current.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};

// TESTS
// const a = new Node('A',a);
// const b = pushNode('B',a);
// const c = pushNode('C',a);
// const d = pushNode('D',a);
// const e = pushNode('E',a);

// console.log(kthToLastNode(2,a));