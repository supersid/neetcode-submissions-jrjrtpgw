class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let mid = Math.floor(nums.length / 2);
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            if (target === nums[mid]) {
                return mid;
            } else if (target < nums[mid]) {
                r = mid - 1;
            } else if (target > nums[mid]) {
                l = mid + 1;
            }
            mid = Math.floor((l + r) / 2);
        }
        return -1;
    }
}
