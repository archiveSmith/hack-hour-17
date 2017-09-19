/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 const a = new Node('A');
 const b = new Node('B');
 const c = new Node('C');
 const d = new Node('D');
 const e = new Node('E');

 a.next = b;
 b.next = c;
 c.next = d;
 d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
    //**********************************//
    // Space Complexity O(n) ?
    // Time Complexity O(n) ?
    //**********************************//

    // if (k < 1) return undefined;
    // let current = head;
    // let array = [];
    // while (current) {
    //     array.push(current);
    //     current = current.next;
    // }
    // return k > array.length ? undefined : array[array.length - k].value;

    //**********************************//
    // Space Complexity O(1) ?
    // Worst Case Time Complexity O(2n) ?
    //**********************************//

    if (k < 1) return undefined;
    let count = 0;
    let current = head;
    while (current) {
        count += 1;
        current = current.next;
    }
    let wantedNode = count - k;
    if (wantedNode < 0) return undefined;
    current = head;
    for (let i = 0; i < wantedNode; i++) {
        current = current.next;
    }
    return current.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
