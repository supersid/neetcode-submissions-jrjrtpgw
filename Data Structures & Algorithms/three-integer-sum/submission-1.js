class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedNums = nums.sort((a, b) => a - b);
        const output = [];
        for (let i = 0; i < sortedNums.length; i++) {
            if (i > 0 && nums[i - 1] === nums[i]) continue;
            let j = i + 1;
            let k = sortedNums.length - 1;
            while (j < k) {
                let val = nums[i] + nums[j] + nums[k];
                if (val > 0) {
                    k--;
                } else if (val < 0) {
                    j++;
                } else {
                    output.push([nums[i], nums[j], nums[k]]);
                    j++;
                    k--;
                    while (j < k && nums[j] === nums[j - 1]) j++;
                    while (j < k && nums[k] === nums[k + 1]) k--;
                }
            }
        }
        return output;
    }
}
