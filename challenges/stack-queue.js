/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack () {
  this.stack = {};
  this.length = 0;

  this.push = (e) => {
    this.stack[this.length] = e;
    this.length++;
    return e;
  };

  this.pop = () => {
    if (!this.length) { return undefined; }
    this.length--;
    const e = this.stack[this.length];
    delete this.stack[this.length];
    return e;
  };
}

/**
* Queue Class
*/

function Queue () {
  this.leftStack = new Stack();
  this.rightStack = new Stack();
  this.left = true;
  this.length = 0;

  this.enqueue = (e) => {
    this.leftStack.push(e);
    this.length += 1;
    return e;
  };

  this.dequeue = (e) => {
    if (!this.rightStack.length && !this.leftStack.length) { return undefined; }

    if (!this.rightStack.length) {
      for (let i = 0; i < this.length; i++) {
        this.rightStack.push(this.leftStack.pop());
      }
    }
    this.length -= 1;
    return this.rightStack.pop();
  };
}

let queue = new Queue();

module.exports = { Stack: Stack, Queue: Queue };
