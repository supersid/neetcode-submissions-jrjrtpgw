class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const maxPile = Math.max(...piles);
        let l = 1;
        let r = maxPile;
        let result = maxPile;

        while (l <= r) {
            let k = l + Math.floor((r - l) / 2);
            let rate = 0;
            piles.forEach((v) => {
                rate += Math.ceil(v / k);
            });
            if (rate <= h) {
                result = k;
                r = k - 1;
            } else {
                l = k + 1;
            }
        }
        return result;
    }
}
