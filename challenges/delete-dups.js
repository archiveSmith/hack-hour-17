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
  const collection = {};
  let currNode = head;
  
  collection[currNode.value] = true;
  
  while (currNode.next) {
    if (collection[currNode.next.value]) {
      let delVal = currNode.next.value;
      deleteCurrNodeAndConnect(currNode);
    } else {
      collection[currNode.next.value] = true; 
    }
    currNode = currNode.next === null ? currNode : currNode.next;
  }
}

function deleteCurrNodeAndConnect(nodeBeforeRepeat) {
  if (nodeBeforeRepeat.next.next) {
    nodeBeforeRepeat.next = nodeBeforeRepeat.next.next;
    console.log('ran');
  } else {
    nodeBeforeRepeat.next = null;
  }
}

module.exports = deleteDups;
