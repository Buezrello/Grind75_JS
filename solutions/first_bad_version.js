

/**
* @param {integer} version number
* @return {boolean} whether the version is bad
*/
 isBadVersion = function(version) {
     return false;
 };
 

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        for (let start=1; start<=n;) {
            let middle =start + Math.floor((n-start)/2);
            if (isBadVersion(middle) && !isBadVersion(middle-1)) {
                return middle;
            } else if (isBadVersion(middle)) {
                n = middle - 1;
            } else {
                start = middle + 1;
            }
        }
        return 1;
    };
};