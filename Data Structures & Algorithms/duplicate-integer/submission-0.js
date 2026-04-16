class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        console.log(new Set(nums));
        return nums.length !== new Set(nums).size;
    }
}
