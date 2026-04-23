class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        const rows = matrix.length;
        const cols = matrix[0].length;

        this.prefix = Array(rows + 1)
            .fill(0)
            .map(() => Array(cols + 1).fill(0));

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                this.prefix[r + 1][c + 1] =
                    matrix[r][c] +
                    this.prefix[r][c + 1] +
                    this.prefix[r + 1][c] -
                    this.prefix[r][c];
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        return (
            this.prefix[row2 + 1][col2 + 1] -
            this.prefix[row1][col2 + 1] -
            this.prefix[row2 + 1][col1] +
            this.prefix[row1][col1]
        );
    }
}
