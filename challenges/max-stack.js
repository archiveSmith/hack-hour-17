/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // is stack an object... or array? or both?
  let stack = {};
  let stack.array = [];
  //doesn't array.push automatically return length?
  stack.push = function (x) {this.array.push(x)};
  stack.pop = function () {return this.array.pop()};
  stack.getMax = function () {return Math.max(array)};

  return stack;
}

module.exports = Stack;