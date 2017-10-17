/**
 * Create a stack.Then create a queue using two stacks.
 */


//LIFO
function Stack() {
  this.length = 0
  this.storage = {};
}

Stack.prototype.push = function(value){
  this.storage[this.length++]=value
}

Stack.prototype.pop = function() {
  let value = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length--;
  return value;
}


//FIFO
function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
}

Queue.prototype.enqueue = function(value) {
  this.stack1.push(value)
}

Queue.prototype.dequeue = function() {
  let len1 = this.stack1.length;
  let len2 = this.stack2.length;
  
  if(len2 === 0){
    if(len1 === 0) return undefined;
    
    while(len1 !== 0) {
      this.stack2.push(this.stack1.pop())
    }
  }
  return this.stack2.pop();
}

module.exports = {Stack: Stack, Queue: Queue};
