/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	if (array.length < 3) return 0;
	var myMax = (arr) => {
	 return arr.reduce((acc, cur) => {
	 	return cur > acc ? cur : acc
	 });
	}

	var max1 = myMax(array);
	var ind1 = array.indexOf(max1);
	array.splice(ind1, 1);

	var max2 = myMax(array);
	var ind2 = array.indexOf(max2);
	array.splice(ind2, 1);

	var max3 = myMax(array);
	var ind3 = array.indexOf(max3);
	array.splice(ind3, 1);

	return max1 * max2 * max3;
}

module.exports = highestProduct;
