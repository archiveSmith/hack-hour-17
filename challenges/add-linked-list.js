/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  let finalList, traverseList;

  function getNum(list) {
    let num="";
    while(list!==null) {
      num+=list.val;
      list = list.next;
    }
    num = num.split('').reverse().join('');
    return num;
  }

  let theNumber = Number(getNum(l1,num1))+Number(getNum(l2,num2));
  let arrNumber = theNumber.toString().split('').reverse();
  for (let i = 0; i<arrNumber; i++) {
    if (i===0) {
      traverseList = new Node(arrNumber[i]);
      finalList=traverseList;
    }
    else {
      traverseList.next = new Node(arrNumber[i]);
      traverseList=traverseList.next;
    }
  }
  return finalList;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
