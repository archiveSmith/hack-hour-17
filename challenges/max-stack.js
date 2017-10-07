/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = {};
  this.index = 0;
  this.highestVal = -Infinity;
}

Stack.prototype.push = function(val) {
  this.storage[this.index] = val;
  if (val > this.highestVal) {
    this.highestVal = val;
  }
  this.index++; 
  return this.index;
};

Stack.prototype.pop = function() {
  let element = this.storage[this.index-1];
  delete this.storage[this.index-1];
  this.index--;
  return element; 
};


Stack.prototype.getMax = function() {
  // O(1) solution
  return this.highestVal;
  // O(n) solution
  // let value = -Infinity;
  // for (x = 0; x < this.index; x += 1) {
  //   if (this.storage[x] > value) {
  //     value = this.storage[x];
  //   }
  // }
  // return value;
};

module.exports = Stack;

// // Tests
// let stack = new Stack();
// stack.push(1);
// stack.push(5);
// stack.push(3);
// stack.push(2);
// // console.log(stack);
// // stack.pop();
// // stack.pop();
// console.log(stack);
// console.log('getMax', stack.getMax());
// console.log('pop', stack.pop());
// console.log('pop', stack.pop());