class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let maxQueue = new MaxPriorityQueue();

        for (let stone of stones) {
            maxQueue.enqueue(stone);
        }

        while (maxQueue.size() > 1) {
            const y = maxQueue.dequeue();
            const x = maxQueue.dequeue();
            if (x !== y) {
                maxQueue.enqueue(y - x);
            }
        }

        return maxQueue.size() === 1 ? maxQueue.dequeue() : 0;
    }
}
