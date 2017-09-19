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

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
	// return if k < 1 - can't get 0th from last
	if(k < 1) return;
	// create node cache array
	let nodeCache = [];
	for(let curNode = head; curNode; curNode = curNode.next){
		nodeCache.push(curNode.value);
	}
	// return if k > length - can't get anything prior to head node
	if(k > nodeCache.length) return;
	// check for value at nodeCache.length - k node
	return nodeCache[nodeCache.length - k];
}

// ==========
// TEST CASES
// ==========
// const headNode = new Node('Sam');
// headNode.next = new Node('John');
// headNode.next.next = new Node('Brice');
// headNode.next.next.next = new Node('Sarah');
// headNode.next.next.next.next = new Node('Sivahn');
// console.log('filled in list', headNode);
// console.log('get 0th from last => (undefined) => ', kthToLastNode(0,headNode));
// console.log('get 2nd from last => (Sarah) => ', kthToLastNode(2,headNode));
// console.log('get 10th from last => (undefined) => ', kthToLastNode(10,headNode));

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
