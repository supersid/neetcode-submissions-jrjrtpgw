class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        let count1 = new Map();

        for (let s of s1) {
            count1.set(s, (count1.get(s) || 0) + 1);
        }

        let count2 = new Map();

        for (let i = 0; i < s1.length; i++) {
            count2.set(s2[i], (count2.get(s2[i]) || 0) + 1);
        }

        if (this.compareMaps(count1, count2)) {
            return true;
        } else {
            let l = 0;
            let r = s1.length;

            while (r < s2.length) {
                count2.set(s2[r], (count2.get(s2[r]) || 0) + 1);
                count2.set(s2[l], count2.get(s2[l]) - 1);
                if (count2.get(s2[l]) === 0) count2.delete(s2[l])
                l++;
                r++;
                if (this.compareMaps(count1, count2)) return true;
            }
        }

        return false;
    }

    compareMaps(m1, m2) {
        if (m1.size !== m2.size) return false;

        for (let [key, value] of m1) {
            if (m2.get(key) !== value) return false;
        }
        return true;
    }
}
