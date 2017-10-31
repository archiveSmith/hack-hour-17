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
  	//new list
	let newList;
	
	let curr1 = l1;
	let curr2 = l2;
	let curr3;
	let carryOver = 0;
	
	while(curr1 || curr2) {
		let tempSum = 0;
		if(curr1) {
			tempSum += curr1.value;
			curr1 = curr1.next;
		}
		
		if(curr2) {
			tempSum += curr2.value;
			curr2 = curr2.next;
		}
		tempSum += carryOver;
		if(tempSum > 9) {
		    carryOver = 1;
			tempSum = tempSum-10;
		} else {
		    carryOver = 0;
		}
		
		if(!newList) {
			newList = new Node(tempSum);
			curr3 = newList;
		} else {
			curr3.next = new Node(tempSum);
			curr3 = curr3.next;
		}
	}
	if(carryOver) {
        curr3.next = new Node(carryOver);
	}
	return newList;

}

module.exports = {Node: Node, addLinkedList: addLinkedList};
