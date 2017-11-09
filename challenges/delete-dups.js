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

class Node {
  constructor (val) {
    this.value = val;
    this.next = null;
  }
}

const deleteDups = (head) => {
  if (!head) return;
  if (!head.next) return head;
  let cache = {};
  cache[head.value] = true;
  let prevNode = head;
  let curNode = head.next;
  while (curNode) {
    if (cache[curNode.value]) {
      prevNode.next = curNode.next;
      curNode = prevNode.next;
    } else {
      cache[curNode.value] = true;
      prevNode = curNode;
      curNode = prevNode.next;
    }
  }
  return head;
};

// const list = new Node(5);
// list.next = new Node(2);
// list.next.next = new Node(3);
// list.next.next.next = new Node(3);
// list.next.next.next.next = new Node(2);
// list.next.next.next.next.next = new Node(4);
// list.next.next.next.next.next.next = new Node(5);
// list.next.next.next.next.next.next.next = new Node(1);

// console.log('5, 2, 3, 4, 1 =>', deleteDups(list));

module.exports = deleteDups;
