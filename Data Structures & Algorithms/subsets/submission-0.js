class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];
        let subset = [];

        function dfs(i) {
            if (i >= nums.length) {
                res.push([...subset]);
                return;
            }

            // include
            subset.push(nums[i]);
            dfs(i + 1);
            // not include
            subset.pop();
            dfs(i + 1);
        }
        dfs(0);
        return res;
    }
}
