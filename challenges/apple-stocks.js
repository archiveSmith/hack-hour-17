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
// minutes in a market day is 390 min.
//find highest and lowest, see if time difference is positive, store difference
//if difference is negative, find second lowest... and so on..
//find second highest, see if difference is positive, store difference if higher than previous, repeat
let temp_max = 0, the_max=0;
for (i=0; i <stock_prices_yesterday.length; i++) {
  for (j=i+1; j< stock_prices_yesterday.length; j++) {
    if (stock_prices_yesterday[j]>stock_prices_yesterday[i])
      temp_max = stock_prices_yesterday[j] - stock_prices_yesterday[i];
      if (temp_max > the_max)
        the_max = temp_max;
      }
    }
  return the_max;
}
module.exports = bestProfit;

console.log(bestProfit([5,7,3,7,3,3,6,8,1000,2,86,334,23,123,24,46]))
