/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
    // create array of nodes in original order
    let nodeArr = [];
    if (head.next !== null) {
        let current = head;
        while (current) {
            nodeArr.push(current);
            current = current.next;
        }
    } else {
        return head;
    }
    // traverse and reassign
    let current = head;
    for (let x = nodeArr.length - 1; x >= 0; x -= 1) {
        current = nodeArr[x];
        current.next = nodeArr[x - 1];
        current = current.next;
    }

    head = nodeArr[nodeArr.length - 1];
    return head;
}

// // test linked list
// let testD = {
//     value: 4,
//     next: null
// };
// let testC = {
//     value: 3,
//     next: testD
// };
// let testB = {
//     value: 2,
//     next: testC
// };
// let testHead = {
//     value: 1,
//     next: testB
// };
// console.log(reverseLinkedList(testHead));

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
