/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
*/

function Stack() {
  this.storage = {};
  this.length = 0;
}

Stack.prototype.push = function (value) {
  this.storage[this.length] = value;
  this.length += 1;
  return this.length;
};

// pop
Stack.prototype.pop = function () {
  const temp = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length -= 1;
  return temp;
};

// getMax
Stack.prototype.getMax = function () {
  let max;
  let keys = Object.keys(this.storage)
  for(let i = 0; i < keys.length; i += 1) {
    if (!max) { max = this.storage[keys[i]]; }
    if (max < this.storage[keys[i]]) {
      max = this.storage[keys[i]];
    }
  }
  return max;
};

// const myStack = new Stack();
//
// myStack.push(24);
// myStack.push(36);
// myStack.push(14);
//
// console.log(myStack.getMax())


// SOLUTIONS
// // Cool way - linkedList
// // getMax - O(1) time
// function Stack() {
//   this.storage = {};
//   this.length = 0;
//   // Add a max property to constructor
//   this.max;
// }
//
// // Create a linkedlist node constructor
// function Node(val) {
//   this.value = val;
//   this.next = null;
// }
//
// Stack.prototype.push = function (value) {
//   this.storage[this.length] = value;
//   // if length is 0, set max to new instance of node
//   if (this.length === 0) this.max = new Node(value);
//   // else if the latest value is greater than the value before it
//     // create a new node with that value
//     // set new node.next to the current max
//     // set max to new node
//   else if (this.storage[this.length] >= this.max.value) {
//     const newMax = new Node(value);
//     newMax.next = this.max;
//     this.max = newMax;
//   }
//   this.length += 1;
//   return this.length;
// };
//
// Stack.prototype.pop = function () {
//   const popped = this.storage[this.length - 1];
//   delete this.storage[this.length - 1];
//   // if popped is equal to the current max, set max to max.next
//   if (popped === this.max.value) this.max = this.max.next;
//   this.length -= 1;
//   return popped;
// };
//
// Stack.prototype.getMax = function () {
//   // max at any point of time is kept in this.max.value
//   return (this.length === 0) ? undefined : this.max.value;
// };
//
//
// // Stackception - two stacks
// // getMax - O(1) time
// function Stackception() {
//   this.storage = {};
//   this.length = 0;
//   // Add a max property to constructor
//   this.max = new StackLinear();
// }
//
// Stackception.prototype.push = function (value) {
//   this.storage[this.length] = value;
//   // push value to max stack
//   if (this.length === 0) this.max.push(value);
//   else if (this.storage[this.length] >= this.max.storage[this.max.length - 1]) this.max.push(value);
//   this.length += 1;
//   return this.length;
// };
//
// Stackception.prototype.pop = function () {
//   const popped = this.storage[this.length - 1];
//   delete this.storage[this.length - 1];
//   // if popped is equal to the current max, pop max stack
//   if (popped === this.max.storage[this.max.length - 1]) this.max.pop();
//   this.length -= 1;
//   return popped;
// };
//
// Stackception.prototype.getMax = function () {
//   console.log(this.max)
//   // max at any point of time is kept at the top of max stack
//   return (this.length === 0) ? undefined : this.max.storage[this.max.length - 1];
// };

module.exports = Stack;
