/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports = function(nums) {
    let count = 0;
    let res = NaN;

    for (const num of nums) {
        if (count === 0) {
            res = num;
        }
        count += res === num ? 1 : -1;
    }

    return res;
};
