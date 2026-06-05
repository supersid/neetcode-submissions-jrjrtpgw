class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const validOpen = ["(", "[", "{"];
        const validClose = [")", "]", "}"];

        const items = {
            ")": "(",
            "]": "[",
            "}": "{",
        };
        if (s.length === 1) return false;

        if (validClose.includes(s[0])) return false;

        const tracker = [];
        tracker.push(s[0]);

        let i = 0;
        let j = 1;

        while (j < s.length) {
            if (validOpen.includes(s[j])) {
                tracker.push(s[j]);
                i++;
            } else {
                if (tracker[i] !== items[s[j]]) {
                    return false;
                } else {
                    tracker.pop();
                    i--;
                }
            }
            j++;
        }
        return tracker.length === 0;
    }
}
