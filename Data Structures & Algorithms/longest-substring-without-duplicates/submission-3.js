class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let r = 0;
        let temp = "";
        let resultCount = 0;

        while (r < s.length) {
            if (!temp.includes(s[r])) {
                temp += s[r];
                resultCount = Math.max(resultCount, temp.length);
                r++;
            } else {
                temp = temp.slice(1);
            }
        }
        return resultCount;
    }
}
