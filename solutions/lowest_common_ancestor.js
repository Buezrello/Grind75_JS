function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    return commonAncestor(root, p, q);
};

function commonAncestor(root, p, q) {
    if (!root || root.val === p.val || root.val === q.val) {
        return root;
    }

    const left = commonAncestor(root.left, p, q);
    const right = commonAncestor(root.right, p, q);

    if (left && right) {
        return root;
    }

    return left ? left : right;
}

