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
  let modeObj = {};
  let mean = return array.reduce(function(acc,curr) {
    return acc + curr;
  },0) / array.length;

``
array.forEach(function(element)  {
  if  (element in modeObj)
    modeObj[element] ++;
    else;
  modeObj[element] = 1;
});
let findHigh, prev = [0,0];
for (let i in modeObj) {
  if (prev[1] <= modeObj[i]) {
    prev[0] = i;
    prev[1] = modeObj[i];
  }
}

if (prev[0] === mean)
  return true;
  else return false;
}
module.exports = modemean;
