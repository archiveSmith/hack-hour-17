/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.size = 0
  this.storage = {}
  }
  
  Stack.prototype.push = function(data) {
    this.size++;
    this.storage[this.size] = data;
  };
  
  Stack.prototype.pop = function() {
    let temp;
    temp = this.storage[this.size];
    delete this.storage[this.size]
    this.size--;
    return temp;
  }
  
  Stack.prototype.getMax = function() {
    let max = -Infinity
    for(let key in this.storage) {
      if(this.storage[key] > max) {
        max = this.storage[key];
      }
    }
    return max;
  }

module.exports = Stack;