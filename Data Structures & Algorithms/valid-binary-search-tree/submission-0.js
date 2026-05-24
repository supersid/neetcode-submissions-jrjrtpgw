/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {
        return this.checkIfValid(root, -Infinity, Infinity);
    }

    checkIfValid(node, min, max) {
        if (!node) return true;

        // for left side we need to care about the upper bound (max)
        // for right side we need to care about the min bound (min)

        if (node.val <= min || node.val >= max) return false;

        return (
            this.checkIfValid(node.left, min, node.val) &&
            this.checkIfValid(node.right, node.val, max)
        );
    }
}
