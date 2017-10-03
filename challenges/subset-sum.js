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
    // base cases
    if (array.indexOf(target) !== -1) {
    return true;
    } else if (array.length === 0) {
        return false;
    }
    let allCombos = [];

    //creates all 2 combos
    if (array.length >= 2) {
        for (let x = 0; x < array.length; x++) {
            for(let y = x+1; y < array.length; y++) {
                let tempArr = [array[x]];
                tempArr.push(array[y]);
                allCombos.push(tempArr);
            }
        }
    } 
    // creates all 3 combos
    if (array.length >= 3) {
        for (let x = 0; x < array.length; x++) {
            let tempArr = [array[x]];
            for(let y = 1; y <= 2; y++) {
                let num = y;
                let total = x + num;
                if (total > array.length -1) {
                    total = total - array.length;
                }
                tempArr.push(array[total]);
            }
            allCombos.push(tempArr);
        }
    }

    // check if any array in allCombos sums to target
    for (let i = 0; i < allCombos.length; i++) {
        var sum = allCombos[i].reduce(function(sum, value) {
            return sum + value;
          }, 0);
        if (sum === target) {
            return true;
        }
    }

    return allCombos;
}

// module.exports = subsetSum;

console.log(subsetSum([3, 7, 4, 2], 5));