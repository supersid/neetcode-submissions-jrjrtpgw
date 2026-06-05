class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const result = [];
        const subset = [];

        function backTracking(open, close, current) {
            if (open === n && close === n) {
                result.push(current);
                return;
            }
            if (open < n) {
                backTracking(open + 1, close, current + "(");
            }
            if (close < open) {
                backTracking(open, close + 1, current + ")");
            }
        }
        backTracking(0, 0, "");
        return result;
    }
}
