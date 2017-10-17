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


//find the average of the array and math.floor it. Store this is in a value called 'mean'

function modemean(array) {
	let sum = 0;
	let mean = 0;
	const modeObj = {};
	//loop through the array, add up the sum and divide by the length. Store as 'mean'. Math.floor this.
	//loop trough the array and and find the most repeated character. Use an object to store the occurance of each element value.
	//compare the mode to the highest valued value in the object.
	for(var i = 0; i < array.length; i++){
		sum += array[i];
	}
	mean = sum / array.length;
	for(var j = 0; j < array.length; j++){
		if(modeObj[array[j]] === undefined) {
			modeObj[array[j]] = 1;
		} else {
			modeObj[array[j]]++;
		}
	}
	//get first obj in property
	let mostAppeared = 0;
	for(var prop in modeObj){
	  mostAppeared = modeObj[prop];
	  break;
	}
	//compare to other obj properties and reset
	for(var key in modeObj) {
	  if(modeObj[key] > mostAppeared) {
	    mostAppeared = modeObj[key];
	  }
	}
	let mode = mostAppeared;
	if(mode === mean) {
	  return true;
	} else {
	  return false;
	}
}
}

module.exports = modemean;
