/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports = function(nums) {
    let sum = 0;
    let max = -Number.MAX_VALUE;
    
    for (const num of nums) {
        sum += num;
        if (sum > max) {
            max = sum;
        }
        if (sum < 0) {
            sum = 0;
        }
    }

    return max;
};