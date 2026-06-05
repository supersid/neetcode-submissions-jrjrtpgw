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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        if (!root) return 0;
        this.res = 0;
        this.calcDepth(root);
        return this.res;
    }

    calcDepth(root) {
        if (!root) return 0;
        let left = this.calcDepth(root.left);
        let right = this.calcDepth(root.right);
        const depth = 1 + Math.max(left, right);
        this.res = Math.max(this.res, left + right);
        return depth;
    }
}
