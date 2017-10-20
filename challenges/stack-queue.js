/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.storage = [];
  this.index = 0;
}

Stack.prototype.push = function (value) {
  this.storage[index] = value;
  this.index += 1;
  return index;
};

Stack.prototype.pop = function () {
  index -= 1;
  let element = this.storage[index];
  this.storage.length = index;
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
    this.push(value);
  } else {
    //put into in stack
    for (let x = 0; x < this.out.index; x += 1) {
      let element = this.out.pop;
      this.in.push(element);
    }
    this.in.push(value);
    for (let y = 0; y < this.in.index; y++) {
      let element = this.out.pop;
      this.out.push(element);
    }
  }
};


Queue.prototype.dequeue = function () {
  return this.out.pop();
};


module.exports = {Stack: Stack, Queue: Queue};






