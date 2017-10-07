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

Stack.prototype.push = function (value) {
  this.stack.push(value);
  return this.stack.length;
}

Stack.prototype.pop = function () {
  return this.stack.pop();
}

Stack.prototype.getMax = function () {
  let max;
  for (let i = 0; i < this.stack.length; i += 1) {
    if (!max || max < this.stack[i]) {
      max = this.stack[i];
    }
  }
  return max;
}


// let stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(10);
// stack.push(11)
// console.log(stack)
// stack.pop()
// console.log(stack)
// stack.getMax();







module.exports = Stack;