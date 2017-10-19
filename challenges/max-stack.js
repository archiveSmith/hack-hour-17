/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack(arr) {
  // body...
  this.newPush = (el) => {
    arr[arr.length] = el;
    return arr.length++;
  };
  this.newPop = () => {
    const removed = arr[arr.length - 1];
    delete arr[arr.length - 1];
    return removed;
  };
  this.getMax = () => {
    let currMax = arr[0];
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] > currMax) {
        currMax = arr[i];
      }
    }
    return currMax;
  };
}

module.exports = Stack;

const test = new Stack([1, 3, 4, 5, 2]);
console.log(test.getMax());
