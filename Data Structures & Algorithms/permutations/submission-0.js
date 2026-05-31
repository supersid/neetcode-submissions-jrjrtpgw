class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const result = [];
        const subset = [];
        const visited = Array.from({ length: nums.length }).fill(false);

        function dfs() {
            if (subset.length === nums.length) {
                result.push([...subset]);
                return;
            }
            for (let i = 0; i < nums.length; i++) {
                if (visited[i]) continue;
                subset.push(nums[i]);
                visited[i] = true;
                dfs();
                visited[i] = false;
                subset.pop();
            }
        }
        dfs();
        return result;
    }
}
