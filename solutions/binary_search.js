/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
module.exports = function(nums, target) {
    return findIndex(nums, target, 0, nums.length-1);
};

function findIndex(nums, target, star, end) {
    middle = star + Math.floor((end - star) / 2);

    if (end < star) {
        return -1;
    }

    if (nums[middle] === target) {
        return middle;
    }

    if (target < nums[middle]) {
        return findIndex(nums, target, star, middle-1);
    } else {
        return findIndex(nums, target, middle+1, end);
    }
}
