class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        let result = false;
        let l = 0;
        let r = s1.length - 1;
        const sortedS1 = s1.split("").sort().join("");

        while (r < s2.length) {
            if (
                sortedS1 ===
                s2
                    .slice(l, r + 1)
                    .split("")
                    .sort()
                    .join("")
            ) {
                return true;
            } else {
                l++;
                r = l + s1.length - 1;
            }
        }
        return result;
    }
}
