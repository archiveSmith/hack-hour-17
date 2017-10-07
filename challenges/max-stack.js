/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() { 
  this.stack = [];
}

Stack.prototype.push = function(val) {
  this.stack = this.stack.concat(val);
  console.log('push');
  return this.stack.length;
};

Stack.prototype.pop = function() {
  let temp = this.stack[this.stack.legnth - 1];
  this.stack.splice(-1, 1);
  return temp;
};

Stack.prototype.getMax = function() {
  this.stack.sort((a, b) => (b - a));
  return this.stack[0];
};

module.exports = Stack;