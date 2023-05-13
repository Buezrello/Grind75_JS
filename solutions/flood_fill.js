/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
module.exports = function(image, sr, sc, color) {
    return floodFill(image, sr, sc, image[sr][sc], color);
};

function floodFill(image, sr, sc, prevColor, color) {
    if(sr < 0 || sr >= image.length || sc < 0 || sc >= image[sr].length) {
        return image;
    }

    if (image[sr][sc] === color || image[sr][sc] !== prevColor) {
        return image;
    }

    image[sr][sc] = color

    image = floodFill(image, sr-1, sc, prevColor, color);
    image = floodFill(image, sr+1, sc, prevColor, color);
    image = floodFill(image, sr, sc-1, prevColor, color);
    image = floodFill(image, sr, sc+1, prevColor, color);

    return image;
}
