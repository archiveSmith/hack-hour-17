/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.storage = {}
    this.index = 0;
}

Stack.prototype.push = function(value) {
    this.storage[this.index] = value;
    this.index++
}

Stack.prototype.pop = function(){
    if(this.storage === {}) {
        return undefined
    }
    this.index--;
    let answer = this.storage[this.index]
    delete this.storage[this.index]
    return answer;
}


/**
* Queue Class
*/


function Queue() {
this.pushing = new Stack();
this.poping = new Stack();
}

Queue.prototype.enqueue = function(value) {
this.pushing.storage = value;
this.pushing.storage++;
}

Queue.prototype.dequeue = function() {
    
}

module.exports = {Stack: Stack, Queue: Queue};
