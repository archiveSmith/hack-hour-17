'use strict';
/**
 * Make an EventEmitter that
 *
 * Example:
 * var instance = new EventEmitter();
 * var counter = 0;
 * instance.on('increment', function() {
 *   counter++;
 * }); // counter should be 0
 * instance.trigger('increment'); // counter should be 1
 * instance.trigger('increment'); // counter should be 2
 *
 *
 * Caveats:
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function(s) as well. That is to say, we can have multiple
 *   listeners for one event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

class EventEmitter {
  constructor () {
    this.actions = {};
  }
}

EventEmitter.prototype.on = function (funcName, func) {
  if (!this.actions[funcName]) this.actions[funcName] = [func];
  else this.actions[funcName].push(func);
};

EventEmitter.prototype.trigger = function (funcName, ...args) {
  if (this.actions[funcName]) {
    for (let i = 0; i < this.actions[funcName].length; i++) {
      this.actions[funcName][i](...args);
    }
  }
};

// const instance = new EventEmitter();
// let counter = 0;
// let counter2 = 0;
// let sum = 0;
// instance.on('increment', function () {
//   counter++;
// });
// instance.on('decrement', function () {
//   counter--;
// });
// instance.on('updateSum', function (n1, n2) {
//   sum += n1 + n2;
// });
// instance.on('increment', function () {
//   counter2++;
// });

// instance.trigger('increment');
// console.log('counter:', counter, 'counter2:', counter2);

module.exports = EventEmitter;
