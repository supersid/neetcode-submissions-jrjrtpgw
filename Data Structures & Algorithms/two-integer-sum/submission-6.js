class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let l = 0;
        let r = 1;

        while (l < nums.length) {
            const complement = target - nums[l];
            r = l + 1;

            while (r < nums.length) {
                if (complement === nums[r]) {
                    return [l, r];
                }
                r++;
            }
            l++;
        }
        return [];
    }
}
