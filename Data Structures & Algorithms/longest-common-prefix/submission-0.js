class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let result = "";
        const sorted = strs.sort((a, b) => a.length - b.length);

        for (let i = 0; i < sorted[0].length; i++) {
            const letter = sorted[0][i];

            for (let j = 1; j < sorted.length; j++) {
                if (letter != sorted[j][i]) {
                    return result;
                }
            }
            result += letter;
        }

        return result;
    }
}
