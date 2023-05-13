function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    return heightBalance(root) >= 0;
};

/**
 * @param {TreeNode} node
 * @return {number}
 */
function heightBalance(node) {
    if (!node) {
        return 0;
    }

    const leftHeight = heightBalance(node.left);
    if (leftHeight === -1) {
        return -1;
    }

    const rightHeight = heightBalance(node.right);
    if (rightHeight === -1) {
        return -1;
    }

    if (Math.abs(leftHeight - rightHeight) > 1) {
        return -1;
    }

    return Math.max(leftHeight, rightHeight) + 1;
}