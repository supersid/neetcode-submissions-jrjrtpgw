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
            let mid = l + Math.floor((r - l) / 2);
            let result = 0;
            piles.forEach((v) => {
                result += Math.ceil(v / mid);
            });
            if (result <= h) {
                minSpeed = mid;
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return minSpeed;
    }
}
