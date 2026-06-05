class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const combined = position.map((v, k) => {
            return { position: v, speed: speed[k] };
        });
        const sorted = combined.sort((a, b) => b.position - a.position);
        const count = [];
        sorted.map((v) => {
            const currTime = (target - v.position) / v.speed;
            if (count.length === 0 || currTime > count[count.length - 1]) {
                count.push(currTime);
            }
        });
        return count.length;
    }
}
