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

// With buffer - O(n)
const deleteDups = function deleteDuplicateNodes(head) {
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

// No buffer - O(n^2)
// const deleteDups = function deleteDuplicateNodes(head) {
//   let currentNode = head;

//   while (currentNode && currentNode.next) {
//     const nextNode = currentNode.next;

//     const inList = isInList(nextNode.next, nextNode.value);
//     const equalsHead = head.value === nextNode.value;

//     if (inList || equalsHead) currentNode.next = nextNode.next;
//     else currentNode = currentNode.next
//   }

//   return head;
// }

const isInList = function isValueFoundInLinkedList(head, value) {
  if (!head) return false;
  else if (head.value === value) return true;
  else return isInList(head.next, value);
}

module.exports = deleteDups;
