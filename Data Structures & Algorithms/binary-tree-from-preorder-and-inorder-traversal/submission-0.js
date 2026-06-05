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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        const inOrderMap = new Map();
        inorder.forEach((v, i) => inOrderMap.set(v, i));
        let pre = 0;

        function dfs(left, right) {
            if (left > right) return null;
            const root = new TreeNode(preorder[pre++]);
            const mid = inOrderMap.get(root.val);

            root.left = dfs(left, mid - 1);
            root.right = dfs(mid + 1, right);
            return root;
        }
        return dfs(0, inorder.length - 1);
    }
}
