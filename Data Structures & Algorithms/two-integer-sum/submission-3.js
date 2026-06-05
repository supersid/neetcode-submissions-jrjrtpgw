class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const lookup = new Map();

        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            if (lookup.has(complement)) {
                return [i, lookup.get(complement)];
            } else {
                lookup.set(nums[i], i);
            }
        }
    }
}
