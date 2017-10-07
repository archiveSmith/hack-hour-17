/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.stack = [];
  this.largestItem;
}

Stack.prototype.push = function(itemToAdd) {
  if (this.stack.length === 0) {
    this.largestItem = itemToAdd;
  } else {
    this.largestItem = this.largestItem < itemToAdd ? itemToAdd : this.largestItem;
  }
  this.stack = this.stack.concat(itemToAdd);
  return this.stack.length;
}

Stack.prototype.pop = function() {
  const retItem = this.stack[this.stack.length - 1];
  this.stack.length = this.stack.length - 1;
  if (retItem === this.largestItem) {
    this.largestItem = this.stack.reduce((acc, curr) => curr > acc ? curr : acc);
  }
  return retItem;
}

Stack.prototype.getMax = function() {
  return this.largestItem;
}

module.exports = Stack;