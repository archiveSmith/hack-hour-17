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
    //edge cases
    if (!Array.isArray(stock_prices_yesterday) || stock_prices_yesterday.length === 0 || !stock_prices_yesterday) return 0;
    if (stock_prices_yesterday.length === 1) return stock_prices_yesterday[0];
    //one buy and one sell
    //get max and min values
    let max = Math.max(...stock_prices_yesterday);
    let min = Math.min(...stock_prices_yesterday);
    if (max - min <= 0) return 0;
    return max - min;
}

const test1 = [2, 2, 3, 4, 5, 10];

console.log(bestProfit(test1));

module.exports = bestProfit;
