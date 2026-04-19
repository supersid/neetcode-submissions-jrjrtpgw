class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {

        const unique = new Set(nums);
        for(let val of unique.values()){
            if(nums.filter(v => v === val).length > nums.length/2){
                return val;
            }
        }
    }
}
