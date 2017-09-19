/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
let sum = 0;
let answer;
let max = -Infinity
let mode = {}

for(var i=0; i<array.length; i++) {
  sum += array[i]
  var index = i+1;
}
let mean = Math.floor(sum/index);

for(var e=0; e<array.length; e++) {
  if(mode[array[e]] === undefined) {
    mode[array[e]]  = 1;
  }
  else {
    mode[array[e]]++;
  }
}

for(var key in mode) {
  if(mode[key]>max) {
    max = mode[key];
    answer = key;
  }
}

if(parseInt(answer) === parseInt(mean)) {
  return true;
}
else {
  return false
}
}
module.exports = modemean