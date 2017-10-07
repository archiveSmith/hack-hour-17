/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.storage = {};
  this.index = 0
}

Stack.prototype.push = function(value) { 
  this.storage[this.index] = value;
  let storedValue = this.storage
  storedValue = Object.keys(storedValue);
  this.index++;
  return storedValue.length;
};
Stack.prototype.pop = function() {
  const removedValue = this.storage[this.index - 1];
  delete this.storage[this.index - 1];
  this.index--;
  return removedValue;
};
Stack.prototype.getMax = function() {
  let storedValue = this.storage;
  let maxValue = Object.values(storedValue);
  var max = Math.max(...maxValue);
  return max;
}
module.exports = Stack;
