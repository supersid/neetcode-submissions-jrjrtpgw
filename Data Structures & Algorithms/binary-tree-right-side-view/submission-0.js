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
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root) return [];
        let queue = [root];
        let result = [];

        while (queue.length > 0) {
            const levelSize = queue.length;
            const level = [];

            for (let i = 0; i < levelSize; i++) {
                let node = queue.shift();
                if (i === levelSize - 1) level.push(node.val);
                if (node.left !== null) queue.push(node.left);
                if (node.right !== null) queue.push(node.right);
            }
            if (level.length) result.push(level);
        }
        return result;
    }
}
