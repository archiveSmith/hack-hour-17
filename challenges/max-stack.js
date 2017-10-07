/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // is stack an object... or array? or both?
  let stack = new Array();
  //doesn't array.push automatically return length?
  this.push = function (x) {this.push(x)};
  this.pop = function () {return this.pop()};
  this.getMax = function () {return Math.max(stack)};

  return stack;
}

module.exports = Stack;