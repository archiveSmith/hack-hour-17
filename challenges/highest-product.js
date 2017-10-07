/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
<<<<<<< HEAD
    if (array.length < 3) return 0;
    if (!Array.isArray(array)) return 0;

    function sortNumber(a,b) {
        return a - b;
    }
    array.sort(sortNumber);
    let i = array.length-1;
    const product = array[i]*array[i-1]*array[i-2];
    return product;
}

const highestProduct = (array) => {
    // Edge cases - array is null, not an array, has less than 3 elements
    if (!array || !Array.isArray(array) || array.length < 3) return 0;
    // Sort array - from largest number to smallest
    // [100, 10, 6, 2, -2, -400]
    array.sort((a, b) => b - a);
    // Biggest 3 (+), Smallest 2 (-)
    // [100, 10, 6], [-2, -400]
    const biggest3 = array.slice(0, 3);
    const smallest2 = array.slice(-2);
    // If the two smaller numbers of biggest 3 is larger than the two smallest/most negative numbers, return product of biggest 3
    // 10 * 6 < -2 * -400
    // otherwise return product of the largest number of biggest three and the two most negative numbers
    // 10 * -2 * -400
    if ((biggest3[1] * biggest3[2]) > (smallest2[0] * smallest2[1])) return biggest3.reduce((a, b) => a * b);
    return biggest3[0] * smallest2.reduce((a, b) => a * b);
  };



  const highestProductTimeOptimized = (array) => {
    if (!array || !Array.isArray(array) || array.length < 3) return 0;
    // Store collection of smallest and biggest values in objects
    const smallest = { one: Infinity, two: Infinity };
    const biggest = { one: -Infinity, two: -Infinity, three: -Infinity };
    for(let i = 0; i < array.length; i += 1) {
      // Collect low values
      if (array[i] < smallest.one) [smallest.one, smallest.two] = [array[i], smallest.one];
      else if (array[i] < smallest.two) smallest.two = array[i];
      // Collect high values
      if (array[i] > biggest.one) [biggest.one, biggest.two, biggest.three] = [array[i], biggest.one, biggest.two];
      else if (array[i] > biggest.two) [biggest.two, biggest.three] = [array[i], biggest.two];
      else if (array[i] > biggest.three) biggest.three = array[i];
    }
    // Return higher product between the two configurations
    return Math.max(biggest.one * biggest.two * biggest.three, biggest.one * smallest.one * smallest.two);
  };
=======

}

>>>>>>> a6fd96a854362e28eef0afab26407e7ca785fd1d

module.exports = highestProduct;
