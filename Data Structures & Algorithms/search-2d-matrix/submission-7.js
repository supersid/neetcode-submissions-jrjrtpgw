class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let l = 0;
        let r = matrix.length * matrix[0].length - 1;

        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2);
            let row = Math.floor(mid / matrix[0].length);
            let col = mid % matrix[0].length;

            if (target > matrix[row][col]) {
                l = mid + 1;
            } else if (target < matrix[row][col]) {
                r = mid - 1;
            } else {
                return true;
            }
        }
        return false;
    }
}
