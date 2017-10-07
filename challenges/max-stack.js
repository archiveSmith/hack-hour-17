/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  const stack = [];

  Stack.prototype.push = (value) => {
    this[this.length] = value;
    return this.length;
  };

  Stack.prototype.pop = () => {
    return this.splice(this.length, 1);
  };

  Stack.prototype.getMax = () => stack.apply.Math.math(null, stack);

  return stack;
}


module.exports = Stack;
