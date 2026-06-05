class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k = 0;

        for(let num of nums){
            if(num !== val){
                nums[k] = num;
                k++;
            }
        }
        return k;
    }
}
