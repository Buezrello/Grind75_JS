/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
module.exports = function(ransomNote, magazine) {
    for (let c of magazine) {
        ransomNote = ransomNote.replace(c, '');
    }

    return ransomNote.length == 0;
};
