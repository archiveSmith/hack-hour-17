/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  
  this.stack = [];

  this.push = function(val) {
    this.stack = this.stack.concat(val);
    return this.stack.length;
  };
  
  this.pop = function() {
    let popped = this.stack[this.stack.length - 1];
    this.stack.splice(-1, 1);
    return temp;
  };

  this.getMax = function() {
    let temp = this.stack.sort((a, b) => b - a);
    return temp[0];
  };
  
  return this.stack;
}

module.exports = Stack;