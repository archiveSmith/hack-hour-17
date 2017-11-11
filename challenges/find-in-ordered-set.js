/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
    // return (arr.includes(target)) ? true : false;
    // OR

    // binary search algorithm
    let start = 0
    let end = arr.length - 1
    let middle = Math.floor((end + start) / 2);

    while (arr[middle] !== target && start < end) {

        if (target < arr[middle]) {
            end = middle - 1;
        } else if (target > arr[middle]) {
            start = middle + 1;
        }
        middle = Math.floor((end + start) / 2);
    }
    //make sure it's the right value
    return (arr[middle] !== target) ? false : true;
}


module.exports = findInOrderedSet;
