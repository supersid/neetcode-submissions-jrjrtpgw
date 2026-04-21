class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let left = 0;
        let right = nums.length - 1;
        let current = 0;

        while (current <= right) {
            if (nums[current] === 0) {
                [nums[left], nums[current]] = [nums[current], nums[left]];
                left++;
                current++;
            } else if (nums[current] === 2) {
                [nums[current], nums[right]] = [nums[right], nums[current]];
                right--;
            } else {
                current++;
            }
        }
        return nums;
    }
}
