class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let freqCount = new Map();
        let l = 0;
        let maxFreq = 0;
        let result = 0;

        for (let i = 0; i < s.length; i++) {
            if (!freqCount.has(s[i])) {
                freqCount.set(s[i], 1);
            } else {
                freqCount.set(s[i], freqCount.get(s[i]) + 1);
            }
            maxFreq = Math.max(maxFreq, freqCount.get(s[i]));

            while (i - l + 1 - maxFreq > k) {
                freqCount.set(s[l], freqCount.get(s[l]) - 1);
                l++;
            }
            result = Math.max(result, i - l + 1);
        }

        return result;
    }
}
