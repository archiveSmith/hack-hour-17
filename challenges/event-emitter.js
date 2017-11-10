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

EventEmitter.prototype.on = function(funcName, func) {
  this.actions[funcName] = func;
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
  this.actions[funcName](...args);
};

// const instance = new EventEmitter();
// let counter = 0;
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

// instance.trigger('updateSum', 20, 30);
// console.log('sum: 50 ->', sum);

module.exports = EventEmitter;
