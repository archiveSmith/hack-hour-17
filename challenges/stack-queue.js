/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.data = [];
  this.push = (val) => {
    this.data[this.data.length] = val;
  }
  this.pop = () => {
    var popped = this.data[this.data.length - 1];
    this.data = this.data.slice(0, this.data.length - 1);
    return popped;
  }
}


/**
* Queue Class
*/


function Queue() {
  this.queueStack = new Stack();
  this.dequeueStack = new Stack();

  this.enqueue = (val) => {
    this.queueStack.push(val);
    let tempArr = [];
    while (this.dequeueStack.data.length > 0) {
      tempArr.push(this.dequeueStack.pop());
    }
    this.dequeueStack.push(val);
    for (var i = tempArr.length - 1; i >= 0; i -= 1) {
      this.dequeueStack.push(tempArr[i]);
    }
  }
  this.dequeue = () => {
    let dequeued = this.dequeueStack.pop();
    //rearange queueStack
    return dequeued;
  }
}

module.exports = {Stack: Stack, Queue: Queue};
