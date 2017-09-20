/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

// first find length of list
//take length - k, use this as stopping index when traversing LL to find return vale


function Node(val) {
  this.value = val;
  this.next = null;
}

function getLength(head) {
	let currentSize = 0;
	let currentNode = head;
	while (currentNode) {
		currentSize++;
		currentNode = currentNode.next;
	}
	return currentSize;
}

function kthToLastNode(k, head) {
	let stoppingIndex = getLength(head) - k;
	let currentIndex = 0;
	let currentNode = head;
	while (currentNode) {
		if (stoppingIndex === currentIndex) {
			return currentNode.value;
		}
		currentIndex++;
		currentNode = currentNode.next;
	}
	return undefined;
}
