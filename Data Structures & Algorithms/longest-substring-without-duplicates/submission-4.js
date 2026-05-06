class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let i = 0;
        let temp = "";
        let resultCount = 0;

        while (i < s.length) {
            if (!temp.includes(s[i])) {
                temp += s[i];
                resultCount = Math.max(resultCount, temp.length);
                i++;
            } else {
                temp = temp.slice(1);
            }
        }
        return resultCount;
    }
}
