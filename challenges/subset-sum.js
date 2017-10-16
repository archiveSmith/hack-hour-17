/* You are given an array of integers and a target number. Write a function that returns true if * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
	// outer loop to check arrays of all lengths (from 1 to array.length)
	let subLength = 1;
  debugger
	while (subLength < array.length) {
		// create ALL sub arrays with length subLength (not just consecutive!)
		for (let i = 0; i < array.length; i += 1) {
			for (let j = 0; j < array.length; j += 1) {
				if (i !== j) {
					let subArray = [array[i], array[j]];
					if (sum(subArray) === target) {
            return true;
          }
				}
			}
		}
		subLength++;
	}
	return false;
}

function sum(arr) {
	return arr.reduce(function(acc, cur) {
		return acc + cur;
	});
}


console.log(subsetSum([3, 7, 4, 2], 5)); // - > true, 3 + 2 = 5
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)) // -> true, 3 + 12 + 5 + 12 = 32
console.log(subsetSum([8, 2, 4, 12], 13)); // -> false
console.log(subsetSum([8, -2, 1, -3], 6)); // -> true, 8 + 1 + (-3) = 6

//module.exports = subsetSum;
