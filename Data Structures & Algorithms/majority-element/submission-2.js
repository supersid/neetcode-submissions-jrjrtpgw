class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        // Boyer-Moore Algo Solution

        let res = null;
        let count = 0;

        for (let num of nums) {
            if (count === 0) {
                res = num;
            }

            count += num === res ? 1 : -1;
        }
        return res;
    }
}
