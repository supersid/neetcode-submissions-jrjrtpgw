class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let i = 0;
        const result = [];
        while(i < nums.length){
            for(let j = i+1; j < nums.length; j++){
                if(nums[i] + nums[j] === target && i !== j){
                    result.push(i,j);
                    i=nums.length;
                    j=i;
                }
            }
            i++;
        }
        return result;
    }
}
