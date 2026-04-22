class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";

        strs.map((v) => {
            result += v.length + "#" + v;
        });

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let i = 0;

        while (i < str.length) {
            const j = str.indexOf("#", i);
            const len = +str.slice(i, j);

            res.push(str.slice(j + 1, j + 1 + len));
            i = j + 1 + len;
        }

        return res;
    }
}
