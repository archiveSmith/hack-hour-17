/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

class Stack {
  // body...
  constructor() {
    this.storage = {};
    this.length = 0;

    this.push.bind(this);
    this.pop.bind(this);
  }

  push(val){
    this.storage[this.length] = val;
    this.length++;
    return this.length;
  }

  pop(){
    let removedElem = this.storage[--this.length];
    delete this.storage[this.length];
    return removedElem;
  }

}


// let arr = new Stack();
// console.log('new Stack: ', arr);
// console.log('return of pushMe: ', arr.pushMe('Sam'));
// console.log('after pushMe: ', arr);
// arr.pushMe('Sivahn');
// arr.pushMe('Steph');
// console.log('popping steph ==> ', arr.popMe());
// console.log('after popMe: ', arr);

module.exports = Stack;