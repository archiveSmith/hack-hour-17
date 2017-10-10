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

function bestProfit(stockPricesYesterday) {
  if (!(stockPricesYesterday instanceof Array)) { return 0; }
  let highest;
  let lowest;
  let profit = 0;
  for (let i = 0; i < stockPricesYesterday.length; i += 1) {
    if (!highest) { highest = stockPricesYesterday[i]; }
    if (!lowest) { lowest = stockPricesYesterday[i]; }
    if (stockPricesYesterday[i] > highest) { highest = stockPricesYesterday[i]; }
    if (stockPricesYesterday[i] < lowest) { lowest = stockPricesYesterday[i]; }
  }
  if (highest > lowest) { profit = highest - lowest; }
  // console.log('highest: ', highest, 'lowest: ', lowest, 'profit: ', profit);
  return profit;
}


module.exports = bestProfit;
