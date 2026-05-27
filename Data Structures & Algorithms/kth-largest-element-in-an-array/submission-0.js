class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const queue = new PriorityQueue((a, b) => a - b);

        for (let num of nums) {
            queue.enqueue(num);
            if (queue.size() > k) {
                queue.dequeue();
            }
        }
        return queue.front();
    }
}
