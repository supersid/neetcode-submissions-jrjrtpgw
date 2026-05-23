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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!root || !subRoot) return false;
        return (
            this.isSameTree(root, subRoot) ||
            this.isSubtree(root.left, subRoot) ||
            this.isSubtree(root.right, subRoot)
        );
    }

    isSameTree(r1, r2) {
        if (r1 === null && r2 === null) return true;
        if (r1 === null || r2 === null) return false;
        if (r1.val !== r2.val) return false;
        return this.isSameTree(r1.left, r2.left) && this.isSameTree(r1.right, r2.right);
    }
}
