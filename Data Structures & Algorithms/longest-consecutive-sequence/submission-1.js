class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const values = new Set(nums);
        let longest = 0;

        for (let val of values) {
            if (!values.has(val - 1)) {
                let length = 1;
                let current = val;

                while (values.has(current + 1)) {
                    current++;
                    length++;
                }
                longest = Math.max(longest, length);
            }
        }
        return longest;
    }
}
