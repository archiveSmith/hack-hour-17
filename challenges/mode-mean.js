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
	const modeCache = {};
	let mode;
	let mean = 0;
	for(var i = 0; i < array.length; i++){
		let curItem = array[i];
		if(!modeCache[curItem]) modeCache[curItem] = 1;
		else modeCache[curItem]++;
		if (!mode || modeCache[curItem] > modeCache[mode] || (modeCache[curItem] === modeCache[mode] && curItem > mode)) mode = curItem;
		mean += curItem;
	}
	mean = Math.floor(mean / array.length);
	return mode === mean;
}

console.log(modemean([3,4,5,5,8])); // => mode = 5, mean = 5.8... (floored = 5) => true
console.log(modemean([3,4,5,5,8,15])); // => mode = 5, mean = 6 => false


	// calculate the mode
	// calculate the mean
	// compare
		// handle multiple modes
	// create const modeCache to store iterations of items
	// create const mode to store current mode obj
	// create var mean to store sum of all items
	// loop through items in array
		// if modeCache[item], increment modeCache[item]
		// else initialize modeCache[item]
		// if !mode, initialize mode to modeCache[item]
		// else if mode item is less than current item and the number of items is the same
			// update mode to new item
		// else if current item iterations is greater than the mode item
			// update mode to new item
		// increment mean by item
	// determine if mode.num === Math.floor(mean);

module.exports = modemean;
