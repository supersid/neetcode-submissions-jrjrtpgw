class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const result = new Map();

        for(let i = 0; i < nums.length; i++){
            const otherNum = target - nums[i];

            if(result.has(otherNum)){
                return [result.get(otherNum), i];
            }
            result.set(nums[i], i);
        }
        return [];
    }
}
