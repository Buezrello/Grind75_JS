class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

let diameter;

/**
 * @param {TreeNode} root
 * @return {number}
 */
const diameterOfBinaryTree = (root) => {
    diameter = 0;
    diameterCalculating(root);
    return diameter;
};

/**
 * @param {TreeNode} node
 * @return {number}
 */
function diameterCalculating(node) {
    if (node === null) {
        return 0;
    }

    let left = diameterCalculating(node.left);
    let right = diameterCalculating(node.right);

    if (diameter < left + right) {
        diameter = left + right;
    }

    return Math.max(left, right) + 1;
}

module.exports = {
    TreeNode,
    diameterOfBinaryTree,
};
