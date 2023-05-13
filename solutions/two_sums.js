/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
module.exports = function(nums, target) {
    const hash_map = new Map();
    for (let i=0; i<nums.length; i++) {
        if (hash_map.has(nums[i])) {
            return [hash_map.get(nums[i]), i];
        } else {
            hash_map.set(target - nums[i], i);
        }
    }
};
