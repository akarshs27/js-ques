// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function(prices) {

    let maxProfit = 0;
    let minPrice = Infinity;

    for(let price of prices) {
        if( price < minPrice) {
            minPrice = price;
        }  else if( price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    } 
    return maxProfit;
};


console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([2, 4, 1]));