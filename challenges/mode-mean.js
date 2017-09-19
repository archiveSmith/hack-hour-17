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
function getMode(arr) {

	var obj = {};
	for (var i = 0; i < arr.length; i++) {
		if (obj.hasOwnProperty(arr[i])) {
			obj[arr[i]] += 1;
		} else {
			obj[arr[i]] = 1;
		}
	}

	var greatestFreq = 0;
  var mode;
  for(var prop in obj){
      if(obj[prop] >= greatestFreq){
          greatestFreq = obj[prop];
          mode = prop;
      }
  }
  return parseInt(mode);
}

function getMean(arr) {
	let sum = arr.reduce(function(acc, cur) {
		return acc + cur;
	});
	return Math.floor(sum / arr.length);
}

function modemean(array) {
	return (getMode(array) === getMean(array))
}


module.exports = modemean;
