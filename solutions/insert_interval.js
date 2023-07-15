/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
module.exports = function(intervals, newInterval) {
    const intervalsBefore = [];
    const intervalsAfter = [];
    let start = newInterval[0];
    let end = newInterval[1];

    for (let interval of intervals) {
        let currentStart = interval[0];
        let currentEnd = interval[1];
        if (currentEnd < start) {
            intervalsBefore.push(interval);
        } else if (currentStart > end) {
            intervalsAfter.push(interval);
        } else {
            start = Math.min(start, currentStart);
            end = Math.max(end, currentEnd);
        }
    }


    const result = [];
    if (intervalsBefore.length > 0) {
        result.push(...intervalsBefore);
    }
    result.push([start, end]);
    if (intervalsAfter.length > 0) {
        result.push(...intervalsAfter);
    }

    return result;
};