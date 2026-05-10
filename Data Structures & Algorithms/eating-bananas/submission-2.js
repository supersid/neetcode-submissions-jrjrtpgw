class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let minSpeed = 1;

        while (l <= r) {
            let k = l + Math.floor((r - l) / 2);
            let totalTime = 0;
            piles.forEach((v) => {
                totalTime += Math.ceil(v / k);
            });
            if (totalTime <= h) {
                minSpeed = k;
                r = k - 1;
            } else {
                l = k + 1;
            }
        }
        return minSpeed;
    }
}
