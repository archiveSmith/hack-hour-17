/**
 * Create a stack.Then create a queue using two stacks.
 */


// queue using two stacks

// last in first out
function Stack() {
  this.index = 0;
  this.storage = {};
}

Stack.prototype.push = function(value) {
  this.storage[this.index++] = value;
}

Stack.prototype.pop = function() {
  let popped = this.storage[this.index - 1];
  delete this.storage[this.index - 1];
  this.index--;
  return popped;
}

// let stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log('pushing inside stack', stack)
// stack.pop();
// stack.pop();
// console.log('after poping 2', stack)

function Queue() {
  this.in = new Stack();
  this.out = new Stack();
}

Queue.prototype.enqueue = function(value) {
  this.in.push(value)
}

Queue.prototype.dequeue = function() {
  if (this.out.index === 0) {
    if(this.in.index === 0) return undefined;
    while (this.in.index !== 0) {
      this.out.push(this.in.pop());
    }
  }
  return this.out.pop();
}

// let queue = new Queue();
// queue.enqueue(4)
// queue.enqueue(5)
// console.log('enqueue queue', queue)
// queue.dequeue();
// console.log(queue)

module.exports = {Stack: Stack, Queue: Queue};
