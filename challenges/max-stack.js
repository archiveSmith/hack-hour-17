/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  //push
  push = arr => {
    if (!Array.isArray(arr) ||  arr.length < 1) throw 'error';
    arr[arr.length] = arr;
    return arr.length;
  }

  //pop
  pop = arr => {
    if (!Array.isArray(arr) ||  arr.length < 1) throw 'error';
    if (Array.isArrary(arr)) return arr.slice(-1,1);
  }

  //getMax
  getMax = (arr) => {
    for (let i = 0; i < arr.length; i += 1){
      //loop through stack 
      //store value to compare in temp var
      //compare to the next
      //return the temp
    }
  }
}

module.exports = Stack;