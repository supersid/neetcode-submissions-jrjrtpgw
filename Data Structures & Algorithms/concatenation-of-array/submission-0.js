class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        return Array(nums.length * 2)
            .fill(0)
            .map((_, i) => nums[i % nums.length]);
    }
}
