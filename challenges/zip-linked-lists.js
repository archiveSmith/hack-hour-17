/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

//iterative solution:
//Time Complexity: O(n), linear bc we traverse list once
//Space Complexity: O(1), constant

const zip = (l1, l2) => {
  let temp1;
  let temp2;
  //set current to l1 (this is the list we will be adding to)
  let current = l1;

  while(l1 && l2) {
    //handles cases where l1 is shorter than l2
    if (!current.next) {
      current.next = l2;
      break
    }

    else {
      //get l1's next node and store in temp1
      temp1 = current.next;
      //reassign current.next to head of l2
      current.next = l2;
      //get l2's next and store in temp2
      //need temp2 variable here or there will be a circular reference on last node
      temp2 = l2.next;
      //reassign l2.next to temp1
      l2.next = temp1;

      //move current one node down
      current = temp1;
      //reset head of l2 to temp2 (its next node)
      l2 = temp2;
    }
  }
  return l1;
}



//sexy recursive solution:
//Time Complexity: O(n)
//Less space efficient because for every node, we're adding a frame to the call stack
//Can we make this tail call optimized?
const zip = (l1, l2) => {
  //base case: if !l1 return l2
  if (!l1) return l2;
  //set l1.next to the recursive call to zip, passing in l2 as the first arg and l1.next as the second arg
  l1.next = zip(l2, l1.next);
  return l1;
}

module.exports = {Node: Node, zip: zip};
