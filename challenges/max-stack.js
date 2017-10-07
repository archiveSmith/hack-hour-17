/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack(value) {
  this.stkArray = [];
}

Stack.prototype.push = function(value) {
  this.stkArray.push(value);
  return (this.stkArray.length);
}

Stack.prototype.pop = function() {
  let popped = this.stkArray.pop();
  return popped;
}

Stack.prototype.getMax = function() {
  let maxVal = this.stkArray[0];
  this.stkArray.forEach(element => {
    if (element > maxVal)
      maxVal = element;
  })
  return maxVal;
}

let Stack1 = new Stack();
Stack1.push(5);
Stack1.push(3);
Stack1.push(10);
Stack1.push(5);
Stack1.push(16);
Stack1.push(20);
console.log(Stack1.pop());
console.log(Stack1.pop());
console.log(Stack1.getMax());

module.exports = Stack;
