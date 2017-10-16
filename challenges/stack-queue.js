/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.stack = {};
    this.length = 0;

    this.push = (e) => {
        this.stack[this.length] = e;
        this.length++;
        return e;
    }

    this.pop = () => {
        
        this.length--;
        const e = this.stack[this.length];
        delete this.stack[this.length];
        return e;
    }
}


/**
* Queue Class
*/


function Queue() {
    this.leftStack = new Stack();
    this.rightStack = new Stack();
    this.left = true;
    this.length = 0;

    this.push = (e) => {
            this.leftStack.push(e);       
        this.length += 1;
        return e;
    }

    this.pop = (e) => {
        if(!this.rightStack.length) {
            for(let i = 0; i < this.length; i++) {
                this.rightStack.push(this.leftStack.pop());
            }
        }
        this.length -= 1;
        return this.rightStack.pop();
    }
}

let queue = new Queue();

/*
console.log([
    queue.push(1),
    queue.push(2),
    queue.push(3),
    queue.push(4),
    queue.pop(),
    queue.pop(),
    queue.push(5),
    queue.push(6),
    queue.pop(),
    queue.push(7),
    queue.pop(),
    queue.pop(),
    queue.pop()
    ]);
    */

module.exports = { Stack: Stack, Queue: Queue };
