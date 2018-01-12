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
  const foundValues = new Set([head.value]);
  let currentNode = head;

  while (currentNode && currentNode.next) {
    if (foundValues.has(currentNode.next.value)) {
      currentNode.next = currentNode.next.next;
    } else {
      foundValues.add(currentNode.next.value);
      currentNode = currentNode.next;
    }
  }

  return head;
}

module.exports = deleteDups;
