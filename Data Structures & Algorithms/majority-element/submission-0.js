class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {

        for (let i = 0; i < nums.length; i++) {
            const count = nums.filter((v) => v === nums[i]).length;
            if (count > nums.length / 2) {
                return nums[i];
            }
        }
    }
}
