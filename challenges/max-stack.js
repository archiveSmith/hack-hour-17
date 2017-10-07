/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.stack = {};
  this.maxStack = {};
  this.length = 0;

  this.push = function(element) {
    this.stack[this.length] = element;
    this.maxStack[this.length-1] < element || this.maxStack[this.length-1] === undefined ? 
      this.maxStack[this.length] = element : 
      this.maxStack[this.length] = this.maxStack[this.length-1];
    this.length += 1;
    return this.length;
  },

  this.pop = function() {
    if(this.length === 0) { return;}
    const retVal = this.stack[this.length - 1];
    delete this.stack[this.length - 1]
    delete this.maxStack[this.length - 1]
    this.length -= 1;
    return retVal; 
  },

  this.getMax = function(){
    return this.maxStack[this.length - 1]


    // O(n) solutions, both iterative and functional

    // return Object.keys(this.stack).reduce((acc,val) => Math.max(acc,this.stack[val]), -Infinity);

    // let max = -Infinity;
    // for(let i = 0; i < this.length; i += 1){
    //   max = Math.max(max, this.stack[i])
    // }
    // return max;
  }

}

module.exports = Stack;