/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.storage = [];
  this.index = 0;
}

Stack.prototype.push = function (value) {
  this.storage[this.index] = value;
  this.index++;
  return this.index;
};

Stack.prototype.pop = function () {
  if (this.index === 0) {
    return undefined;
  }
  this.index--;
  let element = this.storage[this.index];
  this.storage.length = this.index;
  return element;
};


/**
* Queue Class
*/
function Queue() {
  this.in = new Stack();
  this.out = new Stack();
}

Queue.prototype.enqueue = function (value) {
  if (this.out.index === 0) {
    this.out.push(value);
  } else {
    // move from out to in stack
    for (let x = 0; x < this.out.index; x++) {
      let element = this.out.pop();
      this.in.push(element);
    }
    this.in.push(value);

    for (let y = 0; y <= this.in.index; y++) {
      let element = this.in.pop();
      this.out.push(element);
    }
  }
};


Queue.prototype.dequeue = function () {
  if (this.out.index === 0) {
    return undefined;
  }
  return this.out.pop();
};


module.exports = {Stack: Stack, Queue: Queue};

// let queue = new Queue();
// console.log(queue);

// queue.enqueue(1);
// console.log(queue);
// queue.enqueue(2);
// // queue.enqueue(3);
// console.log(queue);