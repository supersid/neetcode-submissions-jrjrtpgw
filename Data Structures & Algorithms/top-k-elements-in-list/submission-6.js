class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            freqMap.set(nums[i], (freqMap.get(nums[i]) || 0) + 1);
        }
        const sorted = Array.from(freqMap.entries()).sort((a, b) => b[1] - a[1]);
        return sorted.splice(0, k).map((v) => v[0]);
    }
}
