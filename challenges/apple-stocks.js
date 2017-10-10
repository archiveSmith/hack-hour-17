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
// stock_prices_yesterday is an array
// market opens at 9:30 AM
// one of the stock at 10:30AM cost 500 dollars yesterday
function bestProfit(stock_prices_yesterday) {

  if (typeof stock_prices_yesterday === 'object' || Object.keys(stock_prices_yesterday).length < 0) return 0;

  const max = stock_prices_yesterday[60];

  cons newMax = Object.keys(stock_prices_yesterday).reduce((acc, curr) => {
    return stock_prices_yesterday[acc] >= stock_prices_yesterday[curr] ?
      stock_prices_yesterday(acc) : stock_prices_yesterday(curr);
  }, max);

  return (newMax > max) ? newMax : 0;
}

console.log(bestProfit())
module.exports = bestProfit;
