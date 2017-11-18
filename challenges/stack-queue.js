/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function (value) {
  this.storage[this.index] = value;
  this.index++;
};

Stack.prototype.pop = function () {
  this.index--;
  const temp = this.storage[this.index];
  delete this.storage[this.index];
  return temp;
};

/**
* Queue Class
*/

function Queue() {
  this.storage1 = new Stack();
  this.storage2 = new Stack();
}

Queue.prototype.enqueue = (value) => {
  this.storage1.push(value);
};

Queue.prototype.dequeue = function () {
  while (this.storage1.length) {
    this.storage2.push(this.storage1.pop());
  }
  return this.storage2.pop();
};

/* --------------- ES6 ---------------

class Stack {
    constructor() {
        this.storage = {};
        this.index = 0;
    }
    push(value) {
        this.storage[this.index] = value;
        this.index++;
    }
    pop() {
        this.index--;
        const temp = this.storage[this.index];
        delete this.storage[this.index];
        return temp;
    }
}

class Queue {
    constructor() {
        this.storage1 = new Stack();
        this.storage2 = new Stack();
    }
    enqueue(value) {
        this.storage1.push(value);
    }
    dequeue() {
        while (this.storage1.length) {
            this.storage2.push(this.storage1.pop());
        }
        return this.storage2.pop();
    }
}



 */







module.exports = { Stack, Queue };
