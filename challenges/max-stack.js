/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {

  // Attributes
  this.data = [];
  this.max = -Infinity;


  // Methods
  this.push = (val) => {
    if (val > this.max) {
      this.max = val;
    }
    let length = this.data.length
    this.data[length] = val;
    return length + 1;
  };
  this.pop = () => {
    if (this.data.length === 0) {
      console.log('cannot pop from empty stack');
    } else {
      this.data = this.data.slice(0, this.data.length - 1);
    }
  };
  this.getMax = () => {
    return this.max;
  };
}

let myStack = new Stack;
myStack.push(0);
myStack.push(14);
myStack.push(68);
myStack.push(-90);
myStack.push(34);
myStack.push(33);
console.log(myStack.getMax());

console.log(myStack.data);



module.exports = Stack;
