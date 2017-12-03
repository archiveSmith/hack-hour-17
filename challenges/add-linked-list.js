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



/** ****************************************
 *  *************** SOLUTION ***************
 *  ****************************************
 * // Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483

// brute force
const countTwos = (num) => {
  let count = 0;
  for (let i = 0; i <= num; i += 1) {
    i.toString().split('').forEach((el) => {
      if (el === '2') count += 1;
    });
  }
  return count;
}

// Faster
const countAtDigit = (num, index) => {
  // power at i-th digit
  const power = Math.pow(10, index);
  // get digit at i-th digit
  const digit = Math.floor(num / power) % 10;
  // rounding down if digit < 2
  const low = num - (num % (power * 10));
  // round up if digit > 2
  const high = low + power * 10;

  // increment count by these numbers
  if (digit < 2) return low / 10;
  else if (digit > 2) return high / 10;
  // if digit is exactly 2
  return (low / 10) + (num % power) + 1;
}

const countOccurences = (num) => {
  // get number digits in num
  const length = num.toString().length;
  let count = 0;

  // do countAtDigit for each digit and increment
  for (let i = 0; i < length; i += 1) {
    count += countAtDigit(num, i);
  }
  return count;
}
 * 
 */