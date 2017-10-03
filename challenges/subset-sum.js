/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
<<<<<<< HEAD
    if (array.length === 0) return false;
    if (array.includes(target)) return true;

    for (let i = 0; i < array.length; i += 1) {
        const newArr = [...array.slice(0, i), ...array.slice(i + 1)];
        const newtarget = target - array[i];
        if (subsetSum(newArr, newtarget)) return true;
    } return false;
}


    // let result = 0;

    // for (var i = 0; i < array.length; i++) {
    //     if (array[i] === target) return true;
    //     if (result === target) return true;
    //     if (result < target) {
    //         result += array[i];
    //     } else {
    //         result -= array[i-1];
    //         result += array[i]
    //     }
    // }
    // return false
=======
>>>>>>> 1efc993ded5f1141fa29d0de8eb932e57112a378

}

module.exports = subsetSum;
