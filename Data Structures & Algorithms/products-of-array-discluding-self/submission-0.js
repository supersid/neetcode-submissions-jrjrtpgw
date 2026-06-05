class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = Array(nums.length).fill(1);
        for (let i = 0; i < nums.length; i++) {
            output = output.map((value, index) => {
                return index !== i ? value * nums[i] : value;
            });
        }

        return output;
    }
}
