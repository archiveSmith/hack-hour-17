/**
 * Create a stack.Then create a queue using two stacks.
 */


class Stack {
  constructor(){
    this.storage = {};
    this.index = 0;
  }

  push(val) {
    this.storage[this.index] = val;
    this.index++;
    return val;
  }

  pop() {
    let removedVal = this.storage[this.index - 1];
    delete this.storage[this.index - 1];
    this.index--;
    return removedVal;
  }
}


/**
* Queue Class
*/


class Queue {
  constructor(){
    this.storage = {};
    this.index = 0;
  }

  unshift(val) {
    let newStorage = {};
    newStorage[0] = val;
    Object.keys(this.storage).map(key => newStorage[Number(key) + 1] = this.storage[key]);
    this.storage = newStorage;
    this.index++;
    return this.storage;
  }

  shift() {
    let removedVal = this.storage[0];
    delete this.storage[0];
    let newStorage = {};
    let keys = Object.keys(this.storage);
    for(let i = keys.length - 1; i > 0; i--){
      newStorage[i - 1] = this.storage[keys[i]];
    }
    this.storage = newStorage;
    this.index--;
    return removedVal;
  }
}

// console.log('TESTING STACK');
// console.log('');

// let stack = new Stack();
// console.log(stack.push('Sam'));
// console.log(stack.push('Sivahn'));
// console.log(stack.push('Jack'));
// console.log(stack.pop());

// console.log('');
// console.log('TESTING QUEUE');
// console.log('');

// let queue = new Queue();
// console.log(queue.unshift('Stella'));
// console.log(queue.unshift('Booger'));
// console.log(queue.unshift('Bailey'));
// console.log(queue.shift());

module.exports = {Stack: Stack, Queue: Queue};
