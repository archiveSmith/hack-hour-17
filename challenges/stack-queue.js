/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.storage = {};
  this.length = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

Stack.prototype.pop = function() {
  let val = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length--;
  return val;
};

/**
* Queue Class
*/

function Queue() {
  this.storage = [];
}

Queue.prototype.enqueue = function(value) {
  this.storage[this.storage.length] = value;
};

Queue.prototype.dequeue = function() {
  if (this.storage.length === 0) return undefined;
  let val = this.storage[0];
  for (let i = 0; i < this.storage.length - 1; i++) {
    this.storage[i] = this.storage[i + 1];
  }
  this.storage.length = this.storage.length - 1;
  return val;
};

let stack1 = new Stack();
let stack2 = new Stack();
stack1.push('hi');
stack2.push(123);

let queue = new Queue();
queue.enqueue(stack1);
queue.enqueue(stack2);

console.log(queue);

module.exports = {Stack: Stack, Queue: Queue};
