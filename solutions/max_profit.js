/**
 * @param {number[]} prices
 * @return {number}
 */
module.exports = function(prices) {
    result = 0;
    min_buy = prices[0];
    for (const item of prices.slice(1)) {
        if (item < min_buy) {
            min_buy = item;
        }
        max_buy = item - min_buy;
        if (max_buy > result) {
            result = max_buy;
        }
    }

    return result;
};
