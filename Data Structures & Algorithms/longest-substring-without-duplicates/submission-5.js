class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let i = 0;
        let l = 0;
        let charSet = new Set();
        let resultCount = 0;

        while (i < s.length) {
            if (!charSet.has(s[i])) {
                charSet.add(s[i]);
                resultCount = Math.max(resultCount, charSet.size);
                i++;
            } else {
                charSet.delete(s[l]);
                l++;
            }
        }
        return resultCount;
    }
}
