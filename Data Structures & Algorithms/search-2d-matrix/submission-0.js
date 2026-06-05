class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let combined = [];
        matrix.map((v) => {
            combined = combined.concat(v);
        });
        let l = 0;
        let r = combined.length - 1;
        let mid = combined.length / 2;

        while (l <= r) {
            if (target === combined[mid]) {
                return true;
            } else if (target < combined[mid]) {
                r = mid - 1;
            } else if (target > combined[mid]) {
                l = mid + 1;
            }
            mid = Math.floor((l + r) / 2);
        }
        return false;
    }
}
