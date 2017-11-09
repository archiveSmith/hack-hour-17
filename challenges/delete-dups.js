/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */



function deleteDups(head) {
  const cache = {};
  let prevNode = null;
  let currNode = head;
  while (currNode) {
    (cache.hasOwnProperty(currNode.value))
      ? prevNode.next = currNode.next
      : cache[currNode.value] = true;
    prevNode = currNode;
    currNode = currNode.next;
  }
  return head;
}

// var Node = function (value) {
//   this.value = value;
//   this.next = null;
// };

// let head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(3);
// console.log(deleteDups(head));

module.exports = deleteDups;
