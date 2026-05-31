class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const result = [];
        const subset = [];
        candidates.sort((a, b) => a - b);

        function dfs(i, sum) {
            if (sum === target) {
                result.push([...subset]);
                return;
            }
            if (i === candidates.length || sum > target) {
                return;
            }

            subset.push(candidates[i]);
            dfs(i + 1, sum + candidates[i]);
            subset.pop();
            while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) i++;
            dfs(i + 1, sum);
        }
        dfs(0, 0);
        return result;
    }
}
