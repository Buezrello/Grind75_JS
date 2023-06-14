/**
 * @param {number[]} nums
 * @return {boolean}
 */
module.exports = function(nums) {
    let temp = new Set();
    for(let num of nums) {
        if (temp.has(num)) {
            return true;
        }
        temp.add(num);
    }
    return false;
};