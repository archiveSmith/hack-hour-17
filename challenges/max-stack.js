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
  this.index = 0;
}

Stack.prototype.push = function (value){
  this.storage[this.index] = value;
  this.index += 1;
}

Stack.prototype.pop = function () {
  const value = this.storage[this.index - 1];
  delete this.storage[this.index - 1];
  this.index -= 1;
  return value;
}

Stack.prototype.getMax = function () {
  const valueArray = Object.values(this.storage);
  valueArray.sort((a, b) => b - a);
  return valueArray[0];
}

// stack = new Stack();
// stack.push(2);
// stack.push(100);
// stack.push(200);
// stack.push(80);
// stack.push(400);
//
// console.log(stack.pop());
// console.log(stack.getMax());
module.exports = Stack;
