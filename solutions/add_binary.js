/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
module.exports = function(a, b) {
    let carry = 0;
    let result = '';
    let aLast = 0;
    let bLast = 0;

    while (a!=='' || b!=='') {
        [a, aLast] = removeLast(a);
        [b, bLast] = removeLast(b);
        let temp = (aLast + bLast + carry) % 2;
        carry = Math.floor((aLast + bLast + carry) / 2);
        result = temp + result;
    }
    if (carry !== 0 || result === '') {
        result = carry + result;
    }

    return result;
};

function removeLast(str) {
    if (str==='') {
        return [str, 0];
    }
    let last = parseInt(str.slice(-1));
    str = str.slice(0, -1) || '';
    return [str, last];
}
