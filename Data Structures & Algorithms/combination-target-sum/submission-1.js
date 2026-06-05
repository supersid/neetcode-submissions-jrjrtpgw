class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];
        const subset = [];

        function dfs(i, sum) {
            if (sum === target) {
                result.push([...subset]);
                return;
            }
            if (i >= nums.length || sum > target) {
                return;
            }

            subset.push(nums[i]);
            dfs(i, nums[i] + sum);
            subset.pop();
            dfs(i + 1, sum);
        }
        dfs(0, 0);
        return result;
    }
}
