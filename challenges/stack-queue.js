/**
 * Create a stack.Then create a queue using two stacks.
 */
//LOGIC: stack is first-in, last-out // queue is first-in, first-out


function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

Stack.prototype.pop = function() {
  if(this.index === 0) {
    return undefined;
  } else { 
    let holder = this.storage[this.index-1];
    delete this.storage[this.index-1];
    this.index--;
    return holder;
  }
};

/**
* Queue Class
*/


function Queue() {
  // set push to be a new stack
  this.pushStack = new Stack();
  // set pop to be a new stack
  this.popStack = new Stack();

  //enqueue prototype should push input value to the push stack
  Queue.prototype.enqueue = function (value) {
    this.pushStack.push(value);
  }
  
  //dequeue prototype should pop input value out of pop stack
  Queue.prototype.dequeue = function (value) { 
    if (this.popStack.index === 0) {
      if (this.pushStack.index === 0) {
        return undefined;
      }
      while (this.pushStack.index !== 0) {
        this.popStack.push(this.pushStack.pop());
      }
    }
    return this.popStack.pop();
}

module.exports = {Stack: Stack, Queue: Queue};
