/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.stack = {};
  this.length = 0;
}

Stack.prototype.push = function(item) {
  this.stack[this.length] = item;
  this.length += 1;
  return this.length;
}

Stack.prototype.pop = function(item) {
  this.length -= 1;
  const retItem = this.stack[this.length];
  delete this.stack[this.length];
  return retItem;
}


/**
* Queue Class
*/


function Queue() {
  this.input = new Stack();
  this.output = new Stack();
}

Queue.prototype.shift = function() { //removes
  while (this.output.length !== 0) {
    this.input.push(this.output.pop());
  }  
  const retItem = this.input.pop();
  while (this.input.length !== 0) {
    this.output.push(this.input.pop()); 
  }
  return retItem;
}

Queue.prototype.unshift = function(item) { //adds
  this.input.push(item);
  while (this.output.length !== 0) {
    this.input.push(this.output.pop());
  }
  while (this.input.length !== 0) {
    this.output.push(this.input.pop()); 
  }
}


module.exports = {Stack: Stack, Queue: Queue};
