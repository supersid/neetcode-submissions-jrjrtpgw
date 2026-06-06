class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const result = [];
        const subset = [];

        function dfs(i) {
            if (i >= s.length) {
                result.push([...subset]);
                return;
            }
            for (let j = i; j < s.length; j++) {
                if (isPalindrome(s, i, j)) {
                    subset.push(s.substring(i, j + 1));
                    dfs(j + 1);
                    subset.pop();
                }
            }
        }
        function isPalindrome(s, i, j) {
            while (i < j) {
                if (s[i] !== s[j]) return false;
                i++;
                j--;
            }
            return true;
        }
        dfs(0);
        return result;
    }
}
