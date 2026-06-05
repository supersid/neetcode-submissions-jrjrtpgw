class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const freqMap = new Map();
        let max = 0;
        let left = 0;
        let right = 0;
        let output = 0;

        while (right < s.length) {
            freqMap.set(s[right], (freqMap.get(s[right]) || 0) + 1);
            max = Math.max(max, freqMap.get(s[right]));
            right++;

            while (right - left - max > k) {
                freqMap.set(s[left], freqMap.get(s[left]) - 1);
                left++;
            }
            output = Math.max(output, right - left);
        }
        return output;
    }
}
