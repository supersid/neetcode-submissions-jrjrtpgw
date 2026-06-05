class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let seen = new Set();
        let longest = 0;
        let l = 0;
        let r = 0;

        while (r < s.length) {
            if (!seen.has(s[r])) {
                seen.add(s[r]);
                r++;
            } else {
                seen.delete(s[l]);
                l++;
            }
            longest = Math.max(longest, seen.size);
        }
        return longest;
    }
}
