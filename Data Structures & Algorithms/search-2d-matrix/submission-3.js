class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let traversalRow = null;

        for (let i = 0; i < matrix.length; i++) {
            if (target >= matrix[i][0] && target <= matrix[i][matrix[i].length - 1]) {
                traversalRow = i;
                break;
            }
        }

        if (traversalRow === null) return false;
        const arr = matrix[traversalRow];
        let l = 0;
        let r = arr.length - 1;
        let mid = Math.floor((l + r) / 2);
        while (l <= r) {
            if (arr[mid] === target) {
                return true;
            } else if (target < arr[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
            mid = Math.floor((l + r) / 2);
        }
        return false;
    }
}
