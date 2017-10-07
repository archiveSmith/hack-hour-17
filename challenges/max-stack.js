/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.body = {};
  this.length = 0;
  this.max = -Infinity;
  this.push = function(item) {
    this.body[this.length] = item;
    this.length += 1;
    if (item > this.max) {
      this.max = item;
    }
  }
  this.pop = function() {
    let result = this.body[this.length-1];
    delete this.body[this.length-1];
    return result;
  };
  this.getMax = function() {
    return this.max;
  }
}
const stackA = new Stack();
stackA.push(12);
stackA.push(131);
stackA.push(10009);
stackA.push(92);
console.log(stackA)
console.log(stackA.getMax())
module.exports = Stack;