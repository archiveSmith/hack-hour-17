/**
 * Create a stack. Then create a queue using two stacks.
 */

function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = (value) => {
  // Set the value of storage at current index to value argument
  this.storage[this.index] = value;
  // Increment index
  this.index += 1;
};

Stack.prototype.pop = () => {
  // Store last element in Stack in a variable
  const temp = this.storage[this.index - 1];
  // Delete last element in stack
  delete this.storage[this.index - 1];
  // decrement index
  this.index -= 1;
  // Return popped value
  return temp;
};

/**
* Queue Class
*/


function Queue() {
  // Initialize two stacks - one acting as an inbox and another as an outbox
  this.in = new Stack();
  this.out = new Stack();
}

Queue.prototype.enqueue = function (value) {
  // Enqueue and push are the same
  this.in.push(value);
};

Queue.prototype.dequeue = function () {
  // Push all the elements from the inbox to the outbox and pop
  // Subsequent dequeue calls will pop out of the outbox if there are still elements in the outbox

  // Check if outbox length is 0
  if (this.out.index === 0) {
    // if the inbox length is also 0, return undefined
    if (this.in.index === 0) return undefined;
    while (this.in.index !== 0) {
      // Push the popped value from the inbox into the outbox
      this.out.push(this.in.pop());
    }
  }
  // Return the popped value out of the outbox
  return this.out.pop();
};

module.exports = { Stack, Queue };
