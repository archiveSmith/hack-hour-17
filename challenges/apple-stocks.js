/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

function bestProfit(stock_prices_yesterday) {
const maxPrice = 0;
const minPrice = 0;
const arr = stock_prices_yesterday;
//find highest number in array
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxPrice) {
        maxPrice = arr[i];
    }
}

newArr = arr.splice()


//find lowest number in array before the highest number happens
for (let j = 0; j < arr.length; j++) {
    if (arr[j] < maxPrice) {
        minPrice = arr[j];
    }
}

//return the difference as the max profit


module.exports = bestProfit;
