/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */
// 
// function Stack() {
//   this.storage = [];
//   this.max = -Infinity;
//
//   this.push = (val) => {
//     this.storage[this.storage.length] = val;
//     if (val > this.max) this.max = val;
//     return this.storage.length;
//   }
//
//   this.pop = () => {
//     if (this.storage.length < 1) return;
//     let popped = this.storage[this.storage.length - 1];
//     this.storage.length--;
//     if (popped === this.max) this.max = Math.max(...this.storage);
//     return popped;
//   }
//
//   this.getMax = () => {
//     return this.max;
//   }
// }

class Stack {
  constructor() {
    this.storage = [];
    this.max = -Infinity;
  }

  push(val) {
    this.storage[this.storage.length] = val;
    if (val > this.max) this.max = val;
    return this.storage.length;
  }

  pop() {
    if (this.storage.length < 1) return;
    let popped = this.storage[this.storage.length - 1];
    this.storage.length--;
    if (popped === this.max) this.max = Math.max(...this.storage);
    return popped;
  }

  getMax() {
    return this.max;
  }
}

module.exports = Stack;
