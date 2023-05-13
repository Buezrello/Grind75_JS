/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
module.exports = function(s, t) {
    sMap = createMapFromString(s);
    tMap = createMapFromString(t);
    return compareMaps(sMap, tMap);
};

function createMapFromString(str) {
    const charMap = new Map();
    for (let char of str) {
        if (charMap.has(char)) {
            charMap.set(char, charMap.get(char) + 1);
        } else {
            charMap.set(char, 1);
        }
    }
    return charMap;
}

function compareMaps(sMap, tMap) {
    if (sMap.size !== tMap.size) {
        return false;
    }
    for (const [key, value] of sMap) {
        if (!tMap.has(key)) {
            return false;
        }
        if (tMap.get(key) !== value) {
            return false;
        }
    }
    return true;
}