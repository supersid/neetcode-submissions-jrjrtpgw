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
    goodNodes(root) {
        if (!root) return 0;
        return this.dfs(root, root.val);
    }

    dfs(node, max) {
        if (!node) return 0;
        let count = node.val >= max ? 1 : 0;
        let newMax = Math.max(max, node.val);
        count += this.dfs(node.left, newMax);
        count += this.dfs(node.right, newMax);
        return count;
    }
}
