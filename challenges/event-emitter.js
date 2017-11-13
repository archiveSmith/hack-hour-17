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

function EventEmitter() {

}

EventEmitter.prototype.on = function (funcName,func){
    if(!this[funcName]) this[funcName] = [];
    this[funcName].push(func);
}

EventEmitter.prototype.trigger = function(funcName,...args){
    if(this[funcName]) this[funcName].forEach((func) => func(...args));  
}

// EventEmitter.prototype.on = function(funcName, func) {
//     if (!this[funcName]) {
//       this[funcName] = [];
//     }
//     this[funcName].push(func);
//   };
  
//   EventEmitter.prototype.trigger = function(funcName) {
//     var args = Array.prototype.slice.call(arguments, 1);
//     if (this[funcName]) {
//       for (var i = 0; i < this[funcName].length; i++) {
//         this[funcName][i].apply(this, args);
//       }
//     }
//   };
  
let instance = new EventEmitter();
let counter = 0;
let counter2 = 0;

instance.on('increment', function() {
    counter++;
});
  
instance.on('increment', function() {
    counter2 += 4;
});
  
 instance.trigger('increment'); 
 instance.trigger('increment'); 
module.exports = EventEmitter;
