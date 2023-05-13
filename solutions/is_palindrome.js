/**
 * @param {string} s
 * @return {boolean}
 */
module.exports = function(s) {
    const regEx = /[^A-Za-z0-9]/g
    const newStr = s.replace(regEx, '').replace(/\s/g, '');
    return newStr.toLowerCase() === newStr.split('').reverse().join('').toLowerCase();
};
