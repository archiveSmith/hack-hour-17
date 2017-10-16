/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = [];
  this.push = function(val) {
    this.storage[this.storage.length] = val;
    return this.storage.length;
  }
  this.pop = function() {
    if (this.storage.length === 0) return;
    let popped = this.storage[this.storage.length - 1];
    this.storage.length--;
    return popped;
  }
}


/**
* Queue Class
*/


function Queue() {
  this.e = new Stack();
  this.d = new Stack();
  this.enqueue = function(val) {
    return this.e.push(val);
  }
  this.dequeue = function() {
    if (this.d.storage.length === 0) {
      while (this.e.storage.length > 0) {
        this.d.push(this.e.pop());
      }
    }
    return this.d.pop();
  }
}

module.exports = {Stack: Stack, Queue: Queue};
