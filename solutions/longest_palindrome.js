/**
 * @param {string} s
 * @return {number}
 */
module.exports = function(s) {
    let charMap = createMap(s);

    var odd = false;
    var palindromeLength = 0;
    for (let key in charMap) {
        let count = charMap[key];
        let mod = count % 2;
        if (mod === 1) {
            odd = true;
        }
        palindromeLength += count - mod;
    }

    let mod = s.length % 2;
    if (!odd && mod === 1) {
        odd = true;
    }

    if (odd) {
        palindromeLength++;
    }

    return palindromeLength;
};

function createMap(s) {
    let charMap = {};
    for (let char of s) {
        if (!charMap[char]) {
            charMap[char] = 1;
        } else {
            charMap[char]++;
        }
    }

    return charMap;
}