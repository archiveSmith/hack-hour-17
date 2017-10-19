/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  //sort
  //iterate and search for n minus element

  let sorted = arr.sort((a,b) => {return a-b});
  for (let i=0; sorted[i] <= n && i < sorted.length; i++) {
    for (let j = i+1; j<= sorted.length && n - (sorted[i]+sorted[j])<=0; j++) {
      if (n - (sorted[i]+sorted[j]) === 0)  return true;
    }
  }
  return false;
}

console.log(twoSum([1,6,3,9,10,20,12,2],8))
module.exports = twoSum;
