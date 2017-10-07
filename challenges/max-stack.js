/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

 const myArray = [1, 24, 4]

function Stack(array) {
  // body...
  this.push = (n) => {
    array[array.length] = n;
    return array.length;
  };
  this.pop = () => {
    let temp = array.slice(array.length - 1, array.length);
    array.splice(array.length - 1, 1);
    return temp;
  };
  let temp;
  for (let i = 0; i < array.length; i += 1) {
    if (temp === undefined) { temp = array[i]; }
    if (temp < array[i]) { temp = array[i]; }
  }
  return temp;
}

module.exports = Stack;
