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


// Nested loops
function deleteDups(head) {
    let inner;
    for (let outer = head; outer; outer = outer.next){
      inner = outer;
      while (inner.next){
        if (outer.value == inner.next.value) inner.next = inner.next.next;
        else inner = inner.next;
      }
    }
  }

  // Hashing/Object
// function deleteDups(head) {
//     var data = {};
//     var prev;
//     for (var curr = head; curr; curr = curr.next) {
//       if (curr.value in data) {
//         prev.next = curr.next;
//       } else {
//         data[curr.value] = true;
//         prev = curr;
//       }
//     }
//   }

module.exports = deleteDups;
