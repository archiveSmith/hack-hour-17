/**
 * Create a stack.Then create a queue using two stacks.
 */


 function Stack() {
   this.storage = [];
 }

 Stack.prototype.push = function(value) {
     this.storage.push(value);
 };

 Stack.prototype.pop = function() {
  return this.storage.pop();
 };
/**
* Queue Class
*/


function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
}

Queue.prototype.push = function(value) {
  this.stack1.push(value);
  this.stack2.push(value);
}

Queue.prototype.pop = function() {
  let counter = 0;
  while (this.stack1.storage.length > 0) {
    counter++;
    this.stack2.push(this.stack1.pop());
  }
  let firstIn = this.stack2.pop();
  for (let i = 0; i < counter; i++) {
    this.stack1.push(this.stack2.pop());
  }
}

module.exports = {Stack: Stack, Queue: Queue};

let queue = new Queue();
queue.push(2);
