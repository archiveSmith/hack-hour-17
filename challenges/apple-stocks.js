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
  if (!Array.isArray(stock_prices_yesterday) || stock_prices_yesterday.length === 0) return 0;

  let max = stock_prices_yesterday[0];
  let min = stock_prices_yesterday[0];

  for (let i = 0; i < stock_prices_yesterday.length; i += 1) {
    if (stock_prices_yesterday[i] > max) {
      max = stock_prices_yesterday[i];
    } else if (stock_prices_yesterday[i] < min) {
      min = stock_prices_yesterday[i];
    }
  }
  if (stock_prices_yesterday.indexOf(max, -(stock_prices_yesterday.length - 1)) > stock_prices_yesterday.indexOf(min)) {
    return max - min;
  }
  return 0;
}

module.exports = bestProfit;

const test = [500, 100, 700, 200];
const test1 = {};
const test2 = [];
const test3 = [500, 400, 300, 200];
const test4 = [500, 300, 500, 500];
console.log('best profit should be 600', bestProfit(test));
console.log('not valid, should return 0', bestProfit(test1));
console.log('not valid, should return 0', bestProfit(test2));
console.log('no profit, should return 0', bestProfit(test3));
console.log('best profit should be 200', bestProfit(test4));
