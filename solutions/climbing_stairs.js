/**
 * @param {number} n
 * @return {number}
 */
module.exports = function(n) {
    if (n <= 2) {
        return n;
    }

    var prev_prev = 1;
    var prev = 2;
    for (let i = 3; i <= n; i++) {
        let temp = prev_prev;
        prev_prev = prev;
        prev = prev_prev + temp;
    }

    return prev;
};