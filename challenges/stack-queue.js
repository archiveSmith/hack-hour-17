/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.stack = {};
  this.size = 0;

  this.push = (el) => {
    this.size += 1;
    this.stack[this.size] = el;
  };
  this.pop = () => {
    const toDelete = this.stack[this.size];
    delete this.stack[this.size];
    this.size -= 1;
    return toDelete;
  };
}


/**
* Queue Class
*/


function Queue() {
  this.popStack = new Stack();
  this.pushStack = new Stack();

  this.enqueue = (el) => {
    this.pushStack.push(el);
  };
  this.dequeue = () => {
    if (this.popStack === 0) {
      if (this.pushStack === 0) return undefined;
      while (this.pushStack !== 0) {
        this.popStack.push(this.pushStack.pop());
      }
    }
    return this.popStack.pop();
  };
}

module.exports = {Stack: Stack, Queue: Queue};

// let testing = new Queue();
// testing.enqueue(1);
// console.log(testing);
// testing.enqueue(5);
// console.log(testing);
