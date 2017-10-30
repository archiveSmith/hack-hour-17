// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
    // check edge case
    if (!Number.isInteger(num)) return 0;
    let count = 0;
    while (num >= 0) {
        // convert num to String
        let string = num.toString().split('');
        console.log(string);
        string.forEach( (char) => {
            if (char === '2') {
                count += 1;
            }
        })
        num -= 1;
    }
    return count;
}

console.log(countTwos(1000));

module.exports = countTwos;