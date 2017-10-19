/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.stack = {};
  this.size = 0;

  this.add = (el) => {
    this.size += 1;
    this.stack[this.size] = el;
  };
  this.remove = () => {
    const toDelete = this.stack[this.size];
    delete this.stack[this.size];
    this.size -= 1;
    return toDelete;
  };
}

// const test = new Stack();
// test.add(4);
// test.add(50);
// console.log(test);
// test.remove();
// console.log(test);

/**
* Queue Class
*/


function Queue() {
  this.popStack = new Stack();
  this.pushStack = new Stack();

  this.enqueue = (el) => {
    this.pushStack.add(el);
  };

  this.dequeue = () => {
    if (this.popStack.size === 0) {
      if (this.pushStack.size === 0) return undefined;
      while (this.pushStack.size !== 0) {
        this.popStack.add(this.pushStack.remove());
      }
    }
    return this.popStack.remove();
  };
}


module.exports = {Stack: Stack, Queue: Queue};

// let testing = new Queue();
// testing.enqueue(1);
// console.log('added 1', testing);
// testing.enqueue(2);
// console.log('added 2', testing);
// testing.enqueue(3);
// console.log('added 3', testing);
// testing.enqueue(5);
// console.log('added 5', testing);
// testing.dequeue();
// console.log('dequeue should be 2, 3, 5', testing);
// testing.dequeue();
// console.log('should be 3, 5', testing);

