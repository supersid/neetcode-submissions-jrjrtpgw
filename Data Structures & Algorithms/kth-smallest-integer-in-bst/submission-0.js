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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        this.count = 0;
        this.result = null;
        this.dfs(root, k);
        return this.result;
    }

    dfs(node, k) {
        if (!node) return this.result;
        this.dfs(node.left, k);
        this.count++;
        if (this.count === k) {
            this.result = node.val;
            return;
        }
        this.dfs(node.right, k);
    }
}
