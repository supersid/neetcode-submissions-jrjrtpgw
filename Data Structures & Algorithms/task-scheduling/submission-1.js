class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const map = new Map();

        for (let task of tasks) {
            map.set(task, (map.get(task) || 0) + 1);
        }

        const maxHeap = new MaxPriorityQueue();

        for (let f of map.values()) {
            maxHeap.enqueue(f);
        }

        let time = 0;
        let q = new Queue();

        while (maxHeap.size() > 0 || q.size() > 0) {
            time++;
            if (maxHeap.size() > 0) {
                const executed = maxHeap.dequeue() - 1;
                if (executed > 0) q.enqueue([executed, time + n]);
            }

            if (q.size() > 0 && q.front()[1] === time) {
                maxHeap.enqueue(q.dequeue()[0]);
            }
        }
        return time;
    }
}
