class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // let traversalRow = null;
        let result = false;
        // matrix.map((v, i) => {
        //     if (target > v[0] && target < v[v.length - 1]) {
        //         traversalRow = i;
        //         break;
        //     }
        // });
        let count = 0;
        while (count < matrix.length) {
            if (matrix[count].includes(target)) {
                result = true;
                break;
            }
            count++;
        }
        return result;
        // if (traversalRow === null) return false;
        // const arr = matrix[traversalRow];
        // let l = 0;
        // let r = arr.length - 1;
        // let mid = Math.floor((l + r) / 2);
        // while(l <= r){
        //     if(arr[mid] === target){

        //     }
        // }
    }
}
