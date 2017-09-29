/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

 function getAllSubsets(arr){
     if (arr.length < 2) return [arr];

     subs = getAllSubsets(arr.slice(1));
     return subs.concat(subs.map(e => e.concat(arr[0])), [[arr[0]]]);
 }

function subsetSum(array, target) {
    if (array.length === 0) return false;
    let subsets = getAllSubsets(array);
    for (let i = 0; i < subsets.length; i++) {
        if (subsets[i].length && subsets[i].reduce((sum, el) => sum += el) === target) return true;
    }
    return false;
}

module.exports = subsetSum;
